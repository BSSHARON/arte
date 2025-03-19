// src/lib/data/script.js
import fs from 'fs';
import path from 'path';
import { products } from './products.js';

// המשתנה שאחראי להגדיר את הקטגוריה הראשית מה שנמצא במערך subjects
const mainCategory = ["photos"];
// המשתנה שאחראי להגדיר את הקטגוריות המשניות שלא ישתנו
const subCategories = ['photos12,photos09,photos08'];
// שם השדה שאנו רוצים לשנות
const fieldName = 'price';
// הערך החדש שנרצה להכניס
const newValue = 199;

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

// קריאת כל תוכן הקובץ
fs.readFile('./src/lib/data/products.js', 'utf8', (err, data) => {
    if (err) {
        console.error('שגיאה בקריאת הקובץ:', err);
        return;
    }

    // חיפוש המיקום של המערך בקובץ
    const startIndex = data.indexOf('export const products =');
    const endIndex = data.indexOf('];', startIndex) + 1;

    if (startIndex === -1) {
        console.error('לא נמצא מערך products בקובץ');
        return;
    }

    // יצירת התוכן החדש עם שמירה על התוכן הקיים
    const newContent =
        data.slice(0, startIndex) +
        'export const products = ' +
        JSON.stringify(products, null, 4) +
        data.slice(endIndex);

    // שמירת השינויים לקובץ
    fs.writeFile('./src/lib/data/products.js', newContent, 'utf8', (err) => {
        if (err) {
            console.error('שגיאה בשמירת הקובץ:', err);
            return;
        }
        console.log('השינויים נשמרו בהצלחה!');
    });
});