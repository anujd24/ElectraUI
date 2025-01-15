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
        title:"Dell Inspiron 15",
        desc:"start your coding career with Dell Inspiron 15!",
        img:"/menuLappy.jpg",
        color:"grey"
    },
    {
        id:2,
        slug: "Television",
        title:"Home Theatre",
        desc:"Watch your fav shows like in the theatres!",
        img:"/menuTv.jpg",
        color:"Black"
    },
    {
        id:3,
        slug: "Phone",
        title:"Vivo Y15s",
        desc:"Be yourself with Vivo Y15s",
        img:"/menuPhone.jpg",
        color:"Blue"
    },
]    

