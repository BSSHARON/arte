/**
 * @typedef {Object} ProductImage
 * @property {string} src
 * @property {string} alt
 * @property {boolean} [only]
 */

/**
 * @typedef {Object} ProductSize
 * @property {string} name
 * @property {number} quantity
 */

/**
 * @typedef {Object} ProductKind
 * @property {string} name
 * @property {number} quantity
 */

/**
 * @typedef {Object} ProductItem
 * @property {string} category
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {ProductImage[]} images
 * @property {string} description
 * @property {string} quote
 * @property {(string[] | ProductSize[])} sizes
 * @property {(string[] | ProductKind[])} kind
 */

/**
 * @typedef {Object} ProductCategory
 * @property {string} id
 * @property {string} image
 * @property {string} category
 * @property {string} header
 * @property {string} sub
 * @property {ProductItem[]} items
 * @property {string[]} subjects
 */



/**
 * Array of subject categories for art products
 * @type {Array<{name: string, description: string, header: string}>}
 * @constant
 * @exports
 * @property {string} name - The identifier/slug for the subject category
 * @property {string} description - Detailed description of the subject category in Hebrew
 * @property {string} header - Display title/header for the subject category in Hebrew
 */
export const subjects = [
    {
        "name": "baton",
        "description": "כל העיצובים המדהימים שקשורים לבטון",
        "header":"עיצובי בטון"
    },
    {
        "name": "art",
        "description": "כל העיצובים הדיגיטליים וצייורי השמן המדהימים  ",
        "header":"אמנות"
    },
    {
        "name": "photos",
        "description": "כל העיצובים הדיגיטליים וצייורי השמן המדהימים  ",
        "header":"אמנות"
    }

]
/** @type {ProductCategory[]} */
export const products = [
    {
        "id": "100",
        "category": "baton01",
        "header": "אקססוריז לעיצוב הבית",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/Accessoriesbaton001.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton01",
                "id": "101",
                "name": "זוג פסלוני בטון דקורטיבי",
                "price": 70,
                "images": [
                    { "src": "/images/Accessoriesbaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton001.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton002.jpg", "alt": "" }
                ],
                "description": `זוג פסלוני בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הפסלונים: קוטר חיצוני 5 ס”מ גובה 9.5 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "102",
                "name": "פסלון זוג בטון דקורטיבי",
                "price": 70,
                "images": [
                    { "src": "/images/Accessoriesbaton00001.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton0001.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton0002.jpg", "alt": "" }
                ],
                "description": "פסלון זוג בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל פסלון זוג:\\nקוטר חיצוני 9.5 ס”מ\\nגובה 9.8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "103",
                "name": "כפות ידיים בטון",
                "price": 60,
                "images": [
                    { "src": "/images/Accessoriesbaton00003.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton0000031.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton0000032.jpg", "alt": "" }
                ],
                "description": "כפות ידיים בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל כפות ידיים :\\nקוטר חיצוני 15/14 ס”מ\\nגובה 5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "104",
                "name": "פסלון פיל בטון דקורטיבי",
                "price": 50,
                "images": [
                    { "src": "/images/Accessoriesbaton00004.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton0000041.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton0000042.jpg", "alt": "" }
                ],
                "description": "פסלונ בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד) מגיע ללא צמח, תוספת סוקולנט 30 ₪.",
                "quote": "גודל הפסלון:\\nקוטר חיצוני 5 ס”מ\\nגובה 9.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "105",
                "name": "פסלון פיל בטון",
                "price": 50,
                "images": [
                    { "src": "/images/Accessoriesbaton000005.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton0501.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton0502.jpg", "alt": "" }
                ],
                "description": "פסלון בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד) מגיע ללא צמח, תוספת סוקולנט 30 ₪..",
                "quote": "פסלון :\\nקוטר חיצוני 10/11 ס”מ\\nגובה 9 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "106",
                "name": "חצי פנים אישה - בטון",
                "price": 60,
                "images": [
                    { "src": "/images/Accessoriesbaton00007.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" }
                ],
                "description": "בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל :\\nקוטר חיצוני 10/7 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "106",
                "name": "חצי פנים אישה - בטון",
                "price": 60,
                "images": [
                    { "src": "/images/Accessoriesbaton00003.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" }
                ],
                "description": "בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל :\\nקוטר חיצוני 10/7 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "106",
                "name": "חצי פנים אישה - בטון",
                "price": 60,
                "images": [
                    { "src": "/images/Accessoriesbaton00003.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" }
                ],
                "description": "בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל :\\nקוטר חיצוני 10/7 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "106",
                "name": "חצי פנים אישה - בטון",
                "price": 60,
                "images": [
                    { "src": "/images/Accessoriesbaton00003.jpg", "alt": "", "only": true },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" },
                    { "src": "/images/Accessoriesbaton00000701.jpg", "alt": "" }
                ],
                "description": "בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל :\\nקוטר חיצוני 10/7 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },

        ]
    },
    {
        "id": "108",
        "category": "baton02",
        "header": "קערות בטון ",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/kaarabaton01.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton02",
                "id": "109",
                "name": "קערת בטון דקורטיבית - נורדי",
                "price": 65,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0101.jpg", "alt": "" },
                    { "src": "/images/kaara0102.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 14.5 ס”מ קוטר פנימי 13.5 ס”מ גובה 6 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "110",
                "name": "קערת בטון דקורטיבית - ויטה",
                "price": 60,
                "images": [
                    { "src": "/images/kaarabaton02.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0201.jpg", "alt": "" },
                    { "src": "/images/kaara0202.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 18 ס”מ קוטר פנימי 17 ס”מ גובה 6 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "111",
                "name": "קערת בטון דקורטיבית - פירנצה",
                "price": 70,
                "images": [
                    { "src": "/images/kaarabaton03.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0301.jpg", "alt": "" },
                    { "src": "/images/kaara0302.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 25 ס”מ קוטר פנימי 23.5 ס”מ גובה 9 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "112",
                "name": "קערת בטון דקורטיבית - תבור",
                "price": 70,
                "images": [
                    { "src": "/images/kaarabaton04.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0401.jpg", "alt": "" },
                    { "src": "/images/kaara0402.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 19.5 ס”מ קוטר פנימי 19 ס”מ גובה 6 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "113",
                "name": "קערת בטון דקורטיבית - שקד",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton05.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0501.jpg", "alt": "" },
                    { "src": "/images/kaara0502.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 15 ס”מ קוטר פנימי 14.5 ס”מ גובה 4.5 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "114",
                "name": "קערת בטון דקורטיבית - פקאן",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton06.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0601.jpg", "alt": "" },
                    { "src": "/images/kaara0602.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 13 ס”מ גובה 4 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "115",
                "name": "קערת בטון דקורטיבית - מיני נורדי",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton07.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0701.jpg", "alt": "" },
                    { "src": "/images/kaara0702.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 14.5 ס”מ גובה 4.5 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "116",
                "name": "קערת בטון דקורטיבית - בר",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton08.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara00801.jpg", "alt": "" },
                    { "src": "/images/kaara00802.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 17/10 ס”מ גובה 4 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "117",
                "name": "קערת בטון דקורטיבית",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton09.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0901.jpg", "alt": "" },
                    { "src": "/images/kaara0901.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 9 ס”מ גובה 6.5 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "118",
                "name": "קערת בטון דקורטיבית - נורדי",
                "price": 65,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0101.jpg", "alt": "" },
                    { "src": "/images/kaara0102.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 14.5 ס”מ\nקוטר פנימי 13.5 ס”מ\nגובה 6 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "119",
                "name": "קערת בטון דקורטיבית - ויטה",
                "price": 60,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0201.jpg", "alt": "" },
                    { "src": "/images/kaara0202.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 18 ס”מ\nקוטר פנימי 17 ס”מ\nגובה 6 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "120",
                "name": "קערת בטון דקורטיבית - פירנצה",
                "price": 70,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/kaara0301.jpg", "alt": "" },
                    { "src": "/images/kaara0302.jpg", "alt": "" }
                ],
                "description": `קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל הקערה: קוטר חיצוני 25 ס”מ\nקוטר פנימי 23.5 ס”מ\nגובה 9 ס”מ`,
                "sizes": [],
                "kind": []
            }
        ]
    },
    {
        "id": "121",
        "category": "baton03",
        "header": "פמוטי בטון",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/‏‏pamotim01.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton03",
                "id": "122",
                "name": "זוג פמוטי בטון בצורת כדור",
                "price": 70,
                "images": [
                    { "src": "/images/‏‏pamotim01.jpg", "alt": "", "only": true },
                    { "src": "/images/‏‏pamotim001.jpg", "alt": "" },
                    { "src": "/images/‏‏pamotim002.jpg", "alt": "" }
                ],
                "description": `זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל זוג פמוטים: קוטר חיצוני 8 ס”מ גובה 7 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "123",
                "name": "זוג פמוטי בטון - לב",
                "price": 70,
                "images": [
                    { "src": "/images/‏‏pamotim02.jpg", "alt": "", "only": true },
                    { "src": "/images/‏‏pamotim0201.jpg", "alt": "" },
                    { "src": "/images/‏‏pamotim0202.jpg", "alt": "" }
                ],
                "description": `זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל זוג פמוטים: קוטר חיצוני 5 ס”מ גובה קטן 10 גדול 12 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "124",
                "name": "שלישית פמוטי בטון - קו נקי",
                "price": 70,
                "images": [
                    { "src": "/images/‏‏pamotim03.jpg", "alt": "", "only": true },
                    { "src": "/images/pamotim0301.jpg", "alt": "" },
                    { "src": "/images/pamotim0302.jpg", "alt": "" }
                ],
                "description": `שלישית פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל  פמוטים: קוטר חיצוני 5 ס”מ גובה קטן 4 בנוני 6 גדול 7.5 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "125",
                "name": "זוג פמוטי בטון - הוד",
                "price": 50,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/pamotim04.jpg", "alt": "" },
                    { "src": "/images/pamotim04.jpg", "alt": "" }
                ],
                "description": `זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל זוג פמוטים: קוטר חיצוני 5 ס”מ גובה 8 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "126",
                "name": "שלישית פמוטי בטון - לובטון",
                "price": 70,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/pamotim05.jpg", "alt": "" },
                    { "src": "/images/pamotim05.jpg", "alt": "" }
                ],
                "description": `שלישית פמוטים נר עומד בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).`,
                "quote": `גודל זוג פמוטים: קוטר חיצוני 4.5 ס”מ גובה 8/6/4 ס”מ`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "127",
                "name": "זוג פמוטים מבטון נר עומד",
                "price": 60,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/pamotim0051.jpg", "alt": "" },
                    { "src": "/images/pamotim0052.jpg", "alt": "" }
                ],
                "description": "זוג פמוטים נר עומד בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל זוג פמוטים:\\nקוטר חיצוני 9/4 ס”מ\\nגובה 9 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "128",
                "name": "פמוט בצורת לב בטון",
                "price": 45,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/pamotim00071.jpg", "alt": "" },
                    { "src": "/images/pamotim00072.jpg", "alt": "" }
                ],
                "description": "פמוט בצורת לב בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל פמוט בצורת לב:\\nקוטר חיצוני 10/9 ס”מ\\nגובה 4 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "129",
                "name": "אגרטל בטון דקורטיבי - לומינה",
                "price": 40,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "images/agratebaton08.jpg", "alt": "" },
                    { "src": "/images/pamotim00072.jpg", "alt": "" }
                ],
                "description": "פמוט בצורת לב בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל פמוט בצורת לב:\\nקוטר חיצוני 10/9 ס”מ\\nגובה 4 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "130",
                "name": "אגרטל בטון דקורטיבי - צורן",
                "price": 60,
                "images": [
                    { "src": "/images/kaarabaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/agratebaton09.jpg", "alt": "" },
                    { "src": "/images/pamotim00072.jpg", "alt": "" }
                ],
                "description": "פמוט בצורת לב בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל פמוט בצורת לב:\\nקוטר חיצוני 10/9 ס”מ\\nגובה 4 ס”מ",
                "sizes": [],
                "kind": []
            }
        ]
    },
    {
        "id": "131",
        "category": "baton04",
        "header": "אגרטלי בטון ",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/agratebaton01.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton04",
                "id": "132",
                "name": "אגרטל בטון דקורטיבית - סתיו",
                "price": 70,
                "images": [
                    { "src": "/images/agratebaton01.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0101.jpg", "alt": "" },
                    { "src": "/images/agratel0102.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 7.5 ס”מ\\nגובה 17.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "133",
                "name": "אגרטל בטון דקורטיבי - יובל",
                "price": 70,
                "images": [
                    { "src": "/images/agratebaton02.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0201.jpg", "alt": "" },
                    { "src": "/images/agratel0202.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 10 ס”מ\\nגובה 14 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "134",
                "name": "אגרטל בטון דקורטיבי - תאיר",
                "price": 70,
                "images": [
                    { "src": "/images/agratebaton03.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0301.jpg", "alt": "" },
                    { "src": "/images/agratel0302.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 16.5 ס”מ\\nגובה 13 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "135",
                "name": "אגרטל בטון דקורטיבי - הוד",
                "price": 70,
                "images": [
                    { "src": "/images/agratebaton04.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0401.jpg", "alt": "" },
                    { "src": "/images/agratel0402.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 7 ס”מ\\nגובה 14 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "136",
                "name": "אגרטל בטון דקורטיבי - הוד",
                "price": 50,
                "images": [
                    { "src": "/images/agratebaton05.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0501.jpg", "alt": "" },
                    { "src": "/images/agratel0502.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 4.5 ס”מ\\nגובה 15 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "137",
                "name": "אגרטל בטון דקורטיבי - בטוניק",
                "price": 40,
                "images": [
                    { "src": "/images/agratebaton06.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0701.jpg", "alt": "" },
                    { "src": "/images/agratel0702.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 6 ס”מ\\nגובה 10.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "138",
                "name": "אגרטל בטון דקורטיבי - לומינה",
                "price": 40,
                "images": [
                    { "src": "/images/agratebaton07.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0801.jpg", "alt": "" },
                    { "src": "/images/agratel0802.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 5 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "139",
                "name": "אגרטל בטון דקורטיבי - צורן",
                "price": 50,
                "images": [
                    { "src": "/images/agratebaton08.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0901.jpg", "alt": "" },
                    { "src": "/images/agratel0902.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 7 ס”מ\\nגובה 10 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton04",
                "id": "285",
                "name": "אגרטל בטון דקורטיבי - צורן",
                "price": 50,
                "images": [
                    { "src": "/images/agratebaton08.jpg", "alt": "", "only": true },
                    { "src": "/images/agratel0901.jpg", "alt": "" },
                    { "src": "/images/agratel0902.jpg", "alt": "" }
                ],
                "description": "אגרטל בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתי - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל האגרטל:\\nקוטר חיצוני 7 ס”מ\\nגובה 10 ס”מ",
                "sizes": [],
                "kind": []
            }

        ]
    },
    {
        "id": "140",
        "category": "oilpaintings",
        "header": "ציורי שמן",
        "image": "/images/oilpaintings02.jpg",
        "sub": "ציור בצבעי שמן על בד קנבס,",
        "subjects": ["art"],
        "items": [
            {
                "category": "oilpaintings",
                "id": "141",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings02.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "142",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings02.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "143",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings03.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "144",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings05.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "145",
                "name": "Oil painting 90×90",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings05.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "146",
                "name": "Spring Collection",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings06.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "147",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings02.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "148",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings02.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "149",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    { "src": "/images/oilpaintings09.jpg", "alt": "" },
                ],
                "description": `הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.`,
                "quote": `ניתן להזמין בגדלים שונים. הדפסה או זכוכית`,
                "sizes": [],
                "kind": []
            },
        ]
    },
    {
        "id": "150",
        "category": "digitalart",
        "header": "אומנות דיגיטלית",
        "sub": "תמונות | ציורים | אומנות דיגיטלית",
        "image": "/images/digital01.jpg",
        "subjects": ["art"],
        "items": [
            {
                "category": "digitalart",
                "id": "151",
                "name": "ARTA-01",
                "price": 0,
                "images": [
                    { "src": "/images/digital01.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, ]

            },
            {
                "category": "digitalart",
                "id": "152",
                "name": "ARTA-02",
                "price": 0,
                "images": [
                    { "src": "/images/digital02.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "153",
                "name": "ARTA-03",
                "price": 0,
                "images": [
                    { "src": "/images/digital03.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "154",
                "name": "ARTA-04",
                "price": 0,
                "images": [
                    { "src": "/images/digital04.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "155",
                "name": "ARTA-05",
                "price": 0,
                "images": [
                    { "src": "/images/digital05.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "156",
                "name": "ARTA-06",
                "price": 0,
                "images": [
                    { "src": "/images/ARTA-06.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "157",
                "name": "ARTA-07",
                "price": 0,
                "images": [
                    { "src": "/images/digital07.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "158",
                "name": "ARTA-08",
                "price": 0,
                "images": [
                    { "src": "/images/digital08.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "159",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "260",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "261",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "262",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []
            }



        ]
    },
    {
        "id": "199",
        "category": "photos01",
        "header": "BLACK & GOLD",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/digital01.jpg",
        "subjects": ["photos"],
        "items": [
            {
                "category": "digitalart",
                "id": "200",
                "name": "PH01",
                "price": 0,
                "images": [
                    { "src": "/photos01/PH01.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, ]

            },
            {
                "category": "digitalart",
                "id": "152",
                "name": "ARTA-02",
                "price": 0,
                "images": [
                    { "src": "/images/digital02.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "153",
                "name": "ARTA-03",
                "price": 0,
                "images": [
                    { "src": "/images/digital03.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "154",
                "name": "ARTA-04",
                "price": 0,
                "images": [
                    { "src": "/images/digital04.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "155",
                "name": "ARTA-05",
                "price": 0,
                "images": [
                    { "src": "/images/digital05.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "156",
                "name": "ARTA-06",
                "price": 0,
                "images": [
                    { "src": "/images/ARTA-06.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "157",
                "name": "ARTA-07",
                "price": 0,
                "images": [
                    { "src": "/images/digital07.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "158",
                "name": "ARTA-08",
                "price": 0,
                "images": [
                    { "src": "/images/digital08.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "159",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "260",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "261",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []

            },
            {
                "category": "digitalart",
                "id": "262",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [{ "name": "60x20", "quantity": 0 }, { "name": "90x30", "quantity": 0 }, { "name": "120x40", "quantity": 0 }],
                "kind": []
            }



        ]
    },
    {
        "id": "250",
        "category": "baton05",
        "header": " דיגיטלית",
        "sub": "תמונות | ציורים | אומנות דיגיטלית",
        "image": "/images/digital01.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton05",
                "id": "251",
                "name": "ARTA-01",
                "price": 0,
                "images": [
                    { "src": "/images/digital01.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "252",
                "name": "ARTA-02",
                "price": 0,
                "images": [
                    { "src": "/images/digital02.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "253",
                "name": "ARTA-03",
                "price": 0,
                "images": [
                    { "src": "/images/digital03.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "154",
                "name": "ARTA-04",
                "price": 0,
                "images": [
                    { "src": "/images/digital04.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "155",
                "name": "ARTA-05",
                "price": 0,
                "images": [
                    { "src": "/images/digital05.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "156",
                "name": "ARTA-06",
                "price": 0,
                "images": [
                    { "src": "/images/ARTA-06.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "157",
                "name": "ARTA-07",
                "price": 0,
                "images": [
                    { "src": "/images/digital07.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "158",
                "name": "ARTA-08",
                "price": 0,
                "images": [
                    { "src": "/images/digital08.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "159",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            }
        ]
    },
    {
        "id": "250",
        "category": "baton05",
        "header": " דיגיטלית",
        "sub": "תמונות | ציורים | אומנות דיגיטלית",
        "image": "/images/digital01.jpg",
        "subjects": ["baton"],
        "items": [
            {
                "category": "baton05",
                "id": "251",
                "name": "ARTA-01",
                "price": 0,
                "images": [
                    { "src": "/images/digital01.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "252",
                "name": "ARTA-02",
                "price": 0,
                "images": [
                    { "src": "/images/digital02.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "253",
                "name": "ARTA-03",
                "price": 0,
                "images": [
                    { "src": "/images/digital03.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "154",
                "name": "ARTA-04",
                "price": 0,
                "images": [
                    { "src": "/images/digital04.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "155",
                "name": "ARTA-05",
                "price": 0,
                "images": [
                    { "src": "/images/digital05.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "156",
                "name": "ARTA-06",
                "price": 0,
                "images": [
                    { "src": "/images/ARTA-06.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "157",
                "name": "ARTA-07",
                "price": 0,
                "images": [
                    { "src": "/images/digital07.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "158",
                "name": "ARTA-08",
                "price": 0,
                "images": [
                    { "src": "/images/digital08.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton05",
                "id": "159",
                "name": "ARTA-09",
                "price": 0,
                "images": [
                    { "src": "/images/digital09.jpg", "alt": "" }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            }
        ]
    },

];


export const allItems = products.reduce((acc, curr) => {

    return acc.concat(curr.items);
}, []);
