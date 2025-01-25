/**
 * @typedef {Object} ProductImage
 * @property {string} src
 * @property {string} alt
 * @property {boolean} [only]
 */

/**
 * @typedef {Object} ProductSize
 * @property {string} name
 * @property {number[]} price
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
        "description": "פריטי בטון לעיצוב הבית והגן - מיוצר בעבודת יד כחול לבן",
        "header":" בטון בעבודת יד"
    },
    {
        "name": "art",
        "description": "תמונות להדפסה זכוכית | קנווס - בגדלים שונים",
        "header":"אמנות דיגיטלית"
    },
    {
        "name": "photos",
        "description": "תמונות יצירות אומנות להדפסה זכוכית | קנווס - בגדלים שונים",
        "header":"תמונות להדפסה "
    },
    {
        "name": "oilpaintings",
        "description": "תמונות להדפסה זכוכית | קנווס - בגדלים שונים",
        "header":" ציורי שמן "
    }


]
/** @type {ProductCategory[]} */
export const products = [
    {
        "id": "100",
        "category": "baton01",
        "header": "אקססוריז לעיצוב הבית",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/Accessoriesbaton000000001.jpg",
        "subjects": [
            "baton"
        ],
        "items": [
            {
                "category": "baton01",
                "id": "101",
                "name": "זוג פסלוני בטון דקורטיבי",
                "price": 70,
                "images": [
                    {
                        "src": "/images/Accessoriesbaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton001.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton002.jpg",
                        "alt": ""
                    }
                ],
                "description": "זוג פסלוני בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הפסלונים: קוטר חיצוני 5 ס”מ גובה 9.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton01",
                "id": "102",
                "name": "פסלון זוג בטון דקורטיבי",
                "price": 70,
                "images": [
                    {
                        "src": "/images/Accessoriesbaton00001.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton0001.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton0002.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00003.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton0000031.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton0000032.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00004.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton0000041.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton0000042.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton000005.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton0501.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton0502.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00007.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00003.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00003.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/Accessoriesbaton00003.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/Accessoriesbaton00000701.jpg",
                        "alt": ""
                    }
                ],
                "description": "בטון בעבודת יד.\\nמאפיינים: עשוי בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל :\\nקוטר חיצוני 10/7 ס”מ\\nגובה 8 ס”מ",
                "sizes": [],
                "kind": []
            }
        ]
    },
    {
        "id": "108",
        "category": "baton02",
        "header": "קערות בטון ",
        "sub": "מיוצר בעבודת יד - כחול לבן",
        "image": "/images/kaarabaton001.jpg",
        "subjects": [
            "baton"
        ],
        "items": [
            {
                "category": "baton02",
                "id": "109",
                "name": "קערת בטון דקורטיבית - נורדי",
                "price": 65,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0101.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0102.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 14.5 ס”מ קוטר פנימי 13.5 ס”מ גובה 6 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "110",
                "name": "קערת בטון דקורטיבית - ויטה",
                "price": 60,
                "images": [
                    {
                        "src": "/images/kaarabaton02.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0201.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0202.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 18 ס”מ קוטר פנימי 17 ס”מ גובה 6 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "111",
                "name": "קערת בטון דקורטיבית - פירנצה",
                "price": 70,
                "images": [
                    {
                        "src": "/images/kaarabaton03.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0301.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0302.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 25 ס”מ קוטר פנימי 23.5 ס”מ גובה 9 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "112",
                "name": "קערת בטון דקורטיבית - תבור",
                "price": 70,
                "images": [
                    {
                        "src": "/images/kaarabaton04.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0401.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0402.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 19.5 ס”מ קוטר פנימי 19 ס”מ גובה 6 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "113",
                "name": "קערת בטון דקורטיבית - שקד",
                "price": 40,
                "images": [
                    {
                        "src": "/images/kaarabaton05.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0501.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0502.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 15 ס”מ קוטר פנימי 14.5 ס”מ גובה 4.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "114",
                "name": "קערת בטון דקורטיבית - פקאן",
                "price": 40,
                "images": [
                    {
                        "src": "/images/kaarabaton06.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0601.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0602.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 13 ס”מ גובה 4 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "115",
                "name": "קערת בטון דקורטיבית - מיני נורדי",
                "price": 40,
                "images": [
                    {
                        "src": "/images/kaarabaton07.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0702.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 14.5 ס”מ גובה 4.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "116",
                "name": "קערת בטון דקורטיבית - בר",
                "price": 40,
                "images": [
                    {
                        "src": "/images/kaarabaton08.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara00801.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara00802.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 17/10 ס”מ גובה 4 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "117",
                "name": "קערת בטון דקורטיבית",
                "price": 40,
                "images": [
                    {
                        "src": "/images/kaarabaton09.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0901.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0901.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 9 ס”מ גובה 6.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "118",
                "name": "קערת בטון דקורטיבית - נורדי",
                "price": 65,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0101.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0102.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 14.5 ס”מ\nקוטר פנימי 13.5 ס”מ\nגובה 6 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "119",
                "name": "קערת בטון דקורטיבית - ויטה",
                "price": 60,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0201.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0202.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 18 ס”מ\nקוטר פנימי 17 ס”מ\nגובה 6 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton02",
                "id": "120",
                "name": "קערת בטון דקורטיבית - פירנצה",
                "price": 70,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/kaara0301.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/kaara0302.jpg",
                        "alt": ""
                    }
                ],
                "description": "קערת בטון בעבודת יד.\nמאפיינים: עשויה בטון עמיד ואיכותי - רב תכליתית - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל הקערה: קוטר חיצוני 25 ס”מ\nקוטר פנימי 23.5 ס”מ\nגובה 9 ס”מ",
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
        "image": "/images/‏‏pamotim00001.jpg",
        "subjects": [
            "baton"
        ],
        "items": [
            {
                "category": "baton03",
                "id": "122",
                "name": "זוג פמוטי בטון בצורת כדור",
                "price": 70,
                "images": [
                    {
                        "src": "/images/‏‏pamotim01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/‏‏pamotim001.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/‏‏pamotim002.jpg",
                        "alt": ""
                    }
                ],
                "description": "זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל זוג פמוטים: קוטר חיצוני 8 ס”מ גובה 7 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "123",
                "name": "זוג פמוטי בטון - לב",
                "price": 70,
                "images": [
                    {
                        "src": "/images/‏‏pamotim02.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/‏‏pamotim0201.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/‏‏pamotim0202.jpg",
                        "alt": ""
                    }
                ],
                "description": "זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל זוג פמוטים: קוטר חיצוני 5 ס”מ גובה קטן 10 גדול 12 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "124",
                "name": "שלישית פמוטי בטון - קו נקי",
                "price": 70,
                "images": [
                    {
                        "src": "/images/‏‏pamotim03.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/pamotim0301.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim0302.jpg",
                        "alt": ""
                    }
                ],
                "description": "שלישית פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל  פמוטים: קוטר חיצוני 5 ס”מ גובה קטן 4 בנוני 6 גדול 7.5 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "125",
                "name": "זוג פמוטי בטון - הוד",
                "price": 50,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/pamotim04.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim04.jpg",
                        "alt": ""
                    }
                ],
                "description": "זוג פמוטים בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל זוג פמוטים: קוטר חיצוני 5 ס”מ גובה 8 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "126",
                "name": "שלישית פמוטי בטון - לובטון",
                "price": 70,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/pamotim05.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim05.jpg",
                        "alt": ""
                    }
                ],
                "description": "שלישית פמוטים נר עומד בטון בעבודת יד.\nמאפיינים: עשוי בטון עמיד ואיכותי - צבעים ניטרליים.\nניתן להזמין בגוונים: לבן בטון / אפור בטון (יתכן שינוי בטקסטורה/גוון מאחר וזו עבודת יד).",
                "quote": "גודל זוג פמוטים: קוטר חיצוני 4.5 ס”מ גובה 8/6/4 ס”מ",
                "sizes": [],
                "kind": []
            },
            {
                "category": "baton03",
                "id": "127",
                "name": "זוג פמוטים מבטון נר עומד",
                "price": 60,
                "images": [
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/pamotim0051.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim0052.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/pamotim00071.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim00072.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "images/agratebaton08.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim00072.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/kaarabaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratebaton09.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/pamotim00072.jpg",
                        "alt": ""
                    }
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
        "image": "/images/agratebaton0001.jpg",
        "subjects": [
            "baton"
        ],
        "items": [
            {
                "category": "baton04",
                "id": "132",
                "name": "אגרטל בטון דקורטיבית - סתיו",
                "price": 70,
                "images": [
                    {
                        "src": "/images/agratebaton01.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0101.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0102.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton02.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0201.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0202.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton03.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0301.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0302.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton04.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0401.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0402.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton05.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0501.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0502.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton06.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0701.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0702.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton07.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0801.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0802.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton08.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0901.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0902.jpg",
                        "alt": ""
                    }
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
                    {
                        "src": "/images/agratebaton08.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/agratel0901.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/agratel0902.jpg",
                        "alt": ""
                    }
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
        "subjects": [
            "oilpaintings"
        ],
        "items": [
            {
                "category": "oilpaintings",
                "id": "141",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings02.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "142",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings02.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "143",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings03.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "144",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings05.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "145",
                "name": "Oil painting 90×90",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings05.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "146",
                "name": "Spring Collection",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings06.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "147",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings02.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "148",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings02.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            },
            {
                "category": "oilpaintings",
                "id": "149",
                "name": "oilpaintings01",
                "price": 0,
                "images": [
                    {
                        "src": "/images/oilpaintings09.jpg",
                        "alt": ""
                    }
                ],
                "description": "הפוך את הבית שלך לגלריה - תמונות דיגיטליות מעוצבות, פריטים ייחודיים לאוהבי אמנות.",
                "quote": "ניתן להזמין בגדלים שונים. הדפסה או זכוכית",
                "sizes": [],
                "kind": []
            }
        ]
    },
    {
        "id": "50000",
        "category": "digitalart",
        "header": "ARTISTIC- ",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/digital/digital01/digital001.jpg",
        "subjects": [
            "art"
        ],
        "items": [
            {
                "category": "digitalart",
                "id": "50001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart",
                "id": "50012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "60000",
        "category": "digitalart01",
        "header": "ARTISTIC- ",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/digital/digital02/digital001.jpg",
        "subjects": [
            "art"
        ],
        "items": [
            {
                "category": "digitalart01",
                "id": "6001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart01",
                "id": "6012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "70000",
        "category": "digitalart02",
        "header": "ARTISTIC- ",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/digital/digital03/digital001.jpg",
        "subjects": [
            "art"
        ],
        "items": [
            {
                "category": "digitalart02",
                "id": "70002",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "digitalart02",
                "id": "70012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "1000",
        "category": "photos01",
        "header": "BLACK & GOLD",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos01/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos01",
                "id": "1001",
                "name": "Arte's photos -01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1002",
                "name": "Arte's photos -02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-002.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/photos/photos01/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1003",
                "name": "Arte's photos -03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1004",
                "name": "Arte's photos -04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1005",
                "name": "Arte's photos -05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1006",
                "name": "Arte's photos -06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1007",
                "name": "Arte's photos -07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1008",
                "name": "Arte's photos -08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1009",
                "name": "Arte's photos -09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1010",
                "name": "Arte's photos -10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1011",
                "name": "Arte's photos -11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -13",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-13.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -14",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-14.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -15",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-15.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -16",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-16.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -17",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-17.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -18",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-18.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -19",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-19.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -20",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-20.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -21",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-21.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -22",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-22.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -23",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-23.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -24",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-24.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -25",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-25.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -26",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-26.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -27",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-27.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -28",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-28.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -29",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-29.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos01",
                "id": "1012",
                "name": "Arte's photos -30",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-30.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "3000",
        "category": "photos03",
        "header": "LIONS",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos03/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos03",
                "id": "3001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-008.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/photos/photos03/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-009.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/photos/photos03/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-011.jpg",
                        "alt": "",
                        "only": true
                    },
                    {
                        "src": "/images/photos/photos03/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos03",
                "id": "3012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos03/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "4000",
        "category": "photos04",
        "header": "BLACK & GOLD",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos01/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos04",
                "id": "4001",
                "name": "Arte's photos -01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4002",
                "name": "Arte's photos -02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-002.jpg",
                        "alt": ""
                    },
                    {
                        "src": "/images/photos/photos01/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4003",
                "name": "Arte's photos -03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4004",
                "name": "Arte's photos -04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4005",
                "name": "Arte's photos -05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4006",
                "name": "Arte's photos -06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4007",
                "name": "Arte's photos -07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4008",
                "name": "Arte's photos -08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4009",
                "name": "Arte's photos -09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4010",
                "name": "Arte's photos -10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4011",
                "name": "Arte's photos -11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4012",
                "name": "Arte's photos -12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4013",
                "name": "Arte's photos -13",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-13.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4014",
                "name": "Arte's photos -14",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-14.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4015",
                "name": "Arte's photos -15",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-15.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4016",
                "name": "Arte's photos -16",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-16.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4017",
                "name": "Arte's photos -17",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-17.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4018",
                "name": "Arte's photos -18",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-18.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4019",
                "name": "Arte's photos -19",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-19.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4020",
                "name": "Arte's photos -20",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-20.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4021",
                "name": "Arte's photos -21",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-21.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4022",
                "name": "Arte's photos -22",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-22.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4023",
                "name": "Arte's photos -23",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-23.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4024",
                "name": "Arte's photos -24",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-24.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4025",
                "name": "Arte's photos -25",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-25.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4026",
                "name": "Arte's photos -26",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-26.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4027",
                "name": "Arte's photos -27",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-27.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4028",
                "name": "Arte's photos -28",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-28.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4029",
                "name": "Arte's photos -29",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-29.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos04",
                "id": "4030",
                "name": "Arte's photos -30",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos01/PH-30.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "7000",
        "category": "photos07",
        "header": "ABSTRACT",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos07",
                "id": "7001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "70011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos07",
                "id": "7012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "8000",
        "category": "photos08",
        "header": "FLOWERS",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos08",
                "id": "8001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos08",
                "id": "8012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "6000",
        "category": "photos06",
        "header": "POP ART",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos06",
                "id": "6001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos06",
                "id": "6012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "5000",
        "category": "photos05",
        "header": "ARTISTIC- ",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos05",
                "id": "5001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos05",
                "id": "5012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "9000",
        "category": "photos09",
        "header": "ARTISTIC- ",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos09",
                "id": "9001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "90010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "9011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos09",
                "id": "90012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "2000",
        "category": "photos02",
        "header": "AFRICAN",
        "sub": "גלריית תמונות למכירה ",
        "image": "/images/photos/photos02/PH-001.jpg",
        "subjects": [
            "photos"
        ],
        "items": [
            {
                "category": "photos02",
                "id": "2001",
                "name": "Arte's photos-01",
                "price": 100,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-01.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            100,
                            100,
                            100
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2002",
                "name": "Arte's photos-02",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-02.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2003",
                "name": "Arte's photos-03",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-03.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2004",
                "name": "Arte's photos-04",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-04.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2005",
                "name": "Arte's photos-05",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-05.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2006",
                "name": "Arte's photos-06",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-06.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2007",
                "name": "Arte's photos-07",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-07.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2008",
                "name": "Arte's photos-08",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-08.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2009",
                "name": "Arte's photos-09",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-09.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2010",
                "name": "Arte's photos-10",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-10.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2011",
                "name": "Arte's photos-11",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-11.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            },
            {
                "category": "photos02",
                "id": "2012",
                "name": "Arte's photos-12",
                "price": 0,
                "images": [
                    {
                        "src": "/images/photos/photos02/PH-12.jpg",
                        "alt": ""
                    }
                ],
                "description": "ניתן להזמין בגדלים שונים. הדפסה על קנווס או זכוכית",
                "quote": "הפוך את הבית שלך לגלריה - תמונות להדפסה, פריטים ייחודיים לאוהבי אמנות.",
                "sizes": [
                    {
                        "name": "30x45",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "50x70",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "70x100",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "100x150",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "150x180",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    },
                    {
                        "name": "מתעניין בגדלים אחרים ",
                        "quantity": 0,
                        "price": [
                            0,
                            0,
                            0
                        ]
                    }
                ],
                "kind": [
                    {
                        "name": "הדפסה על זכוכית",
                        "quantity": 0
                    },
                    {
                        "name": "הדפסה על קנווס",
                        "quantity": 0
                    },
                    {
                        "name": " הדפסה על מתכת  ",
                        "quantity": 0
                    }
                ]
            }
        ]
    }
]


export const allItems = products.reduce((acc, curr) => {

    return acc.concat(curr.items);
}, []);