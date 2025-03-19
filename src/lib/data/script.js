
//המשתנה שאחראי להגדיר את הקטגוריה הראשית
const mainCategory = "baton";
//המשתנה שאחראי להגדיר את הקטגוריות המשניות שלא ישתנו
const subCategories = ['מברגים', 'מקדחים', 'מכונות חשמל', 'פטישים', 'מסורים', 'פטישים מקצועיים', 'מקדחים מקצועיים', 'מברגים מקצועיים', 'מכונות חשמל מקצועיות', 'מסורים מקצועיים'];
//שם השדה שאנו רוצים לשנות
const fieldName = 'category';
//הערך החדש שנרצה להכניס
const newValue = 'כלי עבודה';

// src/lib/data/script.js
import fs from 'fs';
import path from 'path';
import { products } from './products.js';

// הוספת המאפיין price לכל גודל
products.forEach(product => {
    product.items.forEach(item => {
        const priceArray = Array(item.kind.length).fill(50);
        if (item.sizes && Array.isArray(item.sizes)) {
            item.sizes.forEach(size => {
                if (size && typeof size === 'object') {
                    size.delivery = size.delivery || priceArray;
                }
            });
        }
        item.delivery = item.delivery || 50;
        item.spacers = item.spacers || [];
    });
});

// קריאת כל תוכן הקובץ
fs.readFile('./products.js', 'utf8', (err, data) => {
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
    fs.writeFile('./products.js', newContent, 'utf8', (err) => {
        if (err) {
            console.error('שגיאה בשמירת הקובץ:', err);
            return;
        }
        console.log('השינויים נשמרו בהצלחה!');
    });
});