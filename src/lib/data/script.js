// src/lib/data/script.js
import fs from 'fs';
import path from 'path';
import { products } from './products.js';

// המשתנה שאחראי להגדיר את הקטגוריה הראשית מה שנמצא במערך subjects
const mainCategory = ["photos"];
// המשתנה שאחראי להגדיר את הקטגוריות המשניות שלא ישתנו
const subCategories = ['photos12','photos09','photos08'];
// שם השדה שאנו רוצים לשנות
const fieldName = 'sizes';
// הערך החדש שנרצה להכניס
const newValue = [
    {
        "name": "30x45",
        "quantity": 0,
        "price": [
            199,
            264,
            264
        ],
        "delivery": [
            0,
            0,
            0
        ]
    },
    {
        "name": "40x60",
        "quantity": 0,
        "price": [
            223,
            294,
            294
        ],
        "delivery": [
            0,
            0,
            0
        ]
    },
    {
        "name": "50x70",
        "quantity": 0,
        "price": [
            235,
            359,
            359
        ],
        "delivery": [
            0,
            0,
            0
        ]
    },
    {
        "name": "60x90",
        "quantity": 0,
        "price": [
            317,
            430,
            430
        ],
        "delivery": [
            0,
            0,
            0
        ]
    },
    {
        "name": "70x100",
        "quantity": 0,
        "price": [
            335,
            null,
            null
        ],
        "delivery": [
            0,
            0,
            0
        ]
    },
    {
        "name": "100x150",
        "quantity": 0,
        "price": [
            500,
            800,
            800
        ],
        "delivery": [
            0,
            0,
            0
        ]
    }
];

// פונקציה לבדיקה האם קטגוריה צריכה להיכלל
function shouldProcessCategory(product) {
    if (!product.subjects || !Array.isArray(product.subjects)) {
        return false;
    }

    // בדיקה האם יש התאמה לקטגוריה הראשית
    const hasMainCategory = product.subjects.some(subject => mainCategory.includes(subject));

    // בדיקה האם הקטגוריה נמצאת ברשימת הקטגוריות המשניות שיש להתעלם מהן
    const isSubCategory = subCategories.includes(product.category);

    return hasMainCategory && !isSubCategory;
}

// פונקציה לעדכון ערך השדה עבור פריט
function updateItemField(item) {
    if (item && typeof item === 'object') {
        item[fieldName] = newValue;
    }
}

// עדכון המוצרים
products.forEach(product => {
    if (shouldProcessCategory(product)) {
        product.items.forEach(item => {
            //עדכון השדה עבור כל פריט
            updateItemField(item);

        });
    }
});
fs.readFile('./src/lib/data/products.js', 'utf8', (err, data) => {
    if (err) {
        console.error('שגיאה בקריאת הקובץ:', err);
        return;
    }

    // חיפוש המיקום של תחילת המערך
    const exportStatement = 'export const products =';
    const endMarker = 'export const allItems';
    
    const startIndex = data.indexOf(exportStatement);
    const endIndex = data.indexOf(endMarker);
    
    if (startIndex === -1) {
        console.error('לא ניתן למצוא את תחילת המערך');
        console.log('Start index:', startIndex);
        return;
    }
    
    if (endIndex === -1) {
        console.error('לא ניתן למצוא את סוף המערך');
        return;
    }

    // חיפוש הסוגר המרובע האחרון לפני export const allItems
    const contentBeforeAllItems = data.substring(startIndex, endIndex);
    const lastBracketIndex = startIndex + contentBeforeAllItems.lastIndexOf('];');
    
    if (lastBracketIndex === -1) {
        console.error('לא ניתן למצוא את סוף המערך ];');
        return;
    }

    // יצירת התוכן החדש
    const newContent = 
        data.substring(0, startIndex) +
        exportStatement + ' ' +
        JSON.stringify(products, null, 4) +
        ';\n\n' +
        data.substring(endIndex);

    fs.writeFile('./src/lib/data/products.js', newContent, 'utf8', (err) => {
        if (err) {
            console.error('שגיאה בשמירת הקובץ:', err);
            return;
        }
        console.log('השינויים נשמרו בהצלחה!');
    });
});