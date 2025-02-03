type Product = {
    id:number,
    title:string,
    desc?:string,
    img?:string,
    price:number,
    options?: {title:string; additionalPrice: number}[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id:1,
        title: "air fryer",
        desc: "Fry your soggy foods to get original taste!",
        img:"/airf.jpg",
        price: 2500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:2,
        title: "Headphones",
        desc: "Listen out your fav songs passionately!",
        img:"/headphones.jpeg",
        price: 1500,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:3,
        title: "Mouse",
        desc: "Smoother experience on your computer!",
        img:"/mouse.jpeg",
        price: 800,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:4,
        title: "Microwave",
        desc: "Hot, Hot and Hotter!",
        img:"/microwave.jpeg",
        price: 5000,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:5,
        title: "Laptop cooling pad",
        desc: "Cool down your device!",
        img:"/coolingPad.jpg",
        price: 3700,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    },
    {
        id:6,
        title: "Air Conditioner",
        desc: "Just Chill!",
        img:"/airCond.jpg",
        price: 35000,
        options: [
            {
                title:"black",
                additionalPrice: 0,
            },
            {
                title:"Gray",
                additionalPrice: 0,
            },
        ]
    }
]

export const laptops: Products = [
    {
        id: 1,
        title: "HP 15 ",
        desc:"Intel Core i5 13th Gen (16GB Ram/512GB SSD/Fhd/Windows 11/Ms Office/Backlit Kb/15.6 Fd0316Tu Laptop ",
        img:"/hpLast2.jpg",
        price:35000,
        options:[
            {
                title:"black",
                additionalPrice:0,
            },
            {
                title:"grey",
                additionalPrice:0
            }
        ]
    },
    {
        id: 2,
        title: "HP Laptop 255 G9",
        desc:"AMD Athlon Silver 3050U - (8GB/256GB SSD/AMD Radeon Graphics/Windows 11) Thin and Light Business Laptop",
        img:"/hpLast.jpg",
        price:39000,
        options:[
            {
                title:"black",
                additionalPrice:0,
            },
            {
                title:"grey",
                additionalPrice:0
            }
        ]
    },
    {
        id: 3,
        title: "Dell Inspiron 15 3535 ",
        desc:"Dell Inspiron 15 3535 Laptop – 15.6 inch FHD (39.62cm) Display, AMD Ryzen 3 7320U Processor, 8 GB RAM, 512 GB SSD, Carbon Black, 1.67 Kg, Lightweight and Portable",
        img:"/dellInsp.jpg",
        price:23000,
        options:[
            {
                title:"black",
                additionalPrice:0,
            },
            {
                title:"grey",
                additionalPrice:1500
            }
        ]
    },
    {
        id: 4,
        title: "Lenovo V15 G4 ",
        desc:"8GB LPDDR5 Ram, 512 GB SSD PCIe, Windows 11 Lifetime Validity",
        img:"/lenovo.jpg",
        price:72900,
        options:[
            {
                title:"black",
                additionalPrice:0,
            },
            {
                title:"Athlon Silver",
                additionalPrice:2000,
            }
        ]
    },
    {
        id: 5,
        title: "Dell Vostro 14 3420 Laptop",
        desc:"Dell Vostro 14 3420 Laptop – 14 inch FHD (35.56cm) Display, 12th Gen Intel Core i5-1235U Processor, 8 GB RAM, 512 GB SSD",
        img:"/dellvos.avif",
        price:47990,
        options:[
            {
                title:"black",
                additionalPrice:1200,
            },
            {
                title:"titan grey",
                additionalPrice:2300
            }
        ]
    },
    {
        id: 6,
        title: "Acer Chromebook ",
        desc:"CB315-4H Intel Celeron N4500 (Chrome OS/8 GB RAM/128 GB/WiFi 6) 39.6 cm ",
        img:"/acer.jpg",
        price:25090,
        options:[
            {
                title:"black",
                additionalPrice:1000,
            },
            {
                title:"titan grey",
                additionalPrice:2000
            }
        ]
    }
]

export const TV: Products = [
    {
        id: 1,
        title: "Samsung Smart LED TV",
        desc: "Samsung 43-inch Smart LED TV with 4K Ultra HD resolution, HDR support, built-in streaming apps, and voice control.",
        img: "/samsungTv.jpg",
        price: 35000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "Gray",
                additionalPrice: 1000,
            }
        ]
    },
    {
        id: 2,
        title: "LG OLED TV 55A1",
        desc: "LG 55-inch OLED Smart TV with AI ThinQ, 4K resolution, Dolby Vision IQ, and WebOS platform.",
        img: "/lgOled.jpg",
        price: 72000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "Titan Gray",
                additionalPrice: 2000,
            }
        ]
    },
    {
        id: 3,
        title: "Sony Bravia XR X90J",
        desc: "Sony 50-inch Bravia XR X90J TV with Cognitive Processor XR, 4K resolution, Full Array LED, and Google TV.",
        img: "/sonyBravia.jpg",
        price: 63000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "Silver",
                additionalPrice: 1500,
            }
        ]
    },
    {
        id: 4,
        title: "TCL QLED TV 55C715",
        desc: "TCL 55-inch QLED Smart TV with 4K UHD resolution, HDR 10+, Android TV OS, and Dolby Atmos support.",
        img: "/tclQled.jpg",
        price: 54000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "Metallic Gray",
                additionalPrice: 1000,
            }
        ]
    },
    {
        id: 5,
        title: "Panasonic LED Smart TV",
        desc: "Panasonic 32-inch LED Smart TV with HD Ready resolution, built-in Chromecast, and dynamic surround sound.",
        img: "/panasonicTv.jpg",
        price: 22000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "White",
                additionalPrice: 500,
            }
        ]
    },
    {
        id: 6,
        title: "OnePlus Y1S Pro",
        desc: "OnePlus 43-inch Smart LED TV with 4K UHD resolution, Gamma Engine, Dolby Audio, and Android TV OS.",
        img: "/oneplusTv.jpg",
        price: 30000,
        options: [
            {
                title: "Black",
                additionalPrice: 0,
            },
            {
                title: "Titan Gray",
                additionalPrice: 1500,
            }
        ]
    }
];

export const Phones: Products = [
    {
        id: 1,
        title: "Samsung Galaxy S23",
        desc: "Samsung Galaxy S23 with 6.1-inch Dynamic AMOLED 2X Display, Snapdragon 8 Gen 2, 8GB RAM, and 128GB storage.",
        img: "/samsungS23.jpg",
        price: 74999,
        options: [
            {
                title: "Phantom Black",
                additionalPrice: 0,
            },
            {
                title: "Cream",
                additionalPrice: 2000,
            }
        ]
    },
    {
        id: 2,
        title: "Apple iPhone 14 Pro",
        desc: "Apple iPhone 14 Pro with 6.1-inch Super Retina XDR Display, A16 Bionic chip, 6GB RAM, and 128GB storage.",
        img: "/iphone14pro.jpg",
        price: 129900,
        options: [
            {
                title: "Deep Purple",
                additionalPrice: 0,
            },
            {
                title: "Gold",
                additionalPrice: 4000,
            }
        ]
    },
    {
        id: 3,
        title: "OnePlus 11R",
        desc: "OnePlus 11R 5G with 6.74-inch Super Fluid AMOLED Display, Snapdragon 8+ Gen 1, 16GB RAM, and 256GB storage.",
        img: "/oneplus11r.jpg",
        price: 44999,
        options: [
            {
                title: "Sonic Black",
                additionalPrice: 0,
            },
            {
                title: "Galactic Silver",
                additionalPrice: 1500,
            }
        ]
    },
    {
        id: 4,
        title: "Google Pixel 7 Pro",
        desc: "Google Pixel 7 Pro with 6.7-inch LTPO OLED Display, Google Tensor G2 chip, 12GB RAM, and 128GB storage.",
        img: "/pixel7pro.jpg",
        price: 84999,
        options: [
            {
                title: "Obsidian Black",
                additionalPrice: 0,
            },
            {
                title: "Snow",
                additionalPrice: 2500,
            }
        ]
    },
    {
        id: 5,
        title: "Xiaomi 13 Pro",
        desc: "Xiaomi 13 Pro with 6.73-inch AMOLED Display, Snapdragon 8 Gen 2, 12GB RAM, and 256GB storage.",
        img: "/xiaomi13pro.jpg",
        price: 79999,
        options: [
            {
                title: "Ceramic Black",
                additionalPrice: 0,
            },
            {
                title: "Ceramic White",
                additionalPrice: 2000,
            }
        ]
    },
    {
        id: 6,
        title: "Realme GT 3",
        desc: "Realme GT 3 with 6.74-inch AMOLED Display, Snapdragon 8+ Gen 1, 16GB RAM, and 256GB storage.",
        img: "/realmeGT3.jpg",
        price: 44999,
        options: [
            {
                title: "Booster Black",
                additionalPrice: 0,
            },
            {
                title: "Pulse White",
                additionalPrice: 1500,
            }
        ]
    }
];

export const singleProduct: Product = 
    {
      id: 1,
      title: "Dell Inspiron",
      desc: "Dell Inspiron 15 3535 Laptop 15.6 inch FHD (39.62cm) Display, AMD Ryzen 3 7320U Processor, 8 GB RAM, 512 GB SSD, Carbon Black, 1.67 Kg, Lightweight and Portable",
      img: "/dellInsp.jpg",
      price: 43000,
      options: [
        { title: "Gray", additionalPrice: 0 },
        { title: "Black", additionalPrice: 0 },
      ],
    };
  
  
    
  

type Menu = {
    id:number,
    slug:string,
    title:string,
    desc?:string,
    img?:string,
    color:string
}[];

export const menu: Menu = [
    {
        id:1,
        slug: "Laptops",
        title:"Laptop",
        desc:"start your coding career with Dell Inspiron 15!",
        img:"/laptopBG.jpeg",
        color:"grey"
    },
    {
        id:2,
        slug: "Television",
        title:"Television",
        desc:"Watch your fav shows like in the theatres!",
        img:"/menuTv.jpg",
        color:"Black"
    },
    {
        id:3,
        slug: "Phone",
        title:"Phone",
        desc:"Be yourself with Vivo Y15s",
        img:"/menuPhone.jpg",
        color:"Blue"
    },
]    

