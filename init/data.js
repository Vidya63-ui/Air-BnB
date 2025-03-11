const sampleListings = [
  {
    title: "Indian Accent",
    dscrpt: "A contemporary restaurant offering inventive Indian cuisine.",
    img: "https://media-cdn.tripadvisor.com/media/photo-o/12/0c/5d/9b/indian-accent.jpg",
    price: 1500,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "Seashell Suites and Villas",
    dscrpt: "A luxurious villa resort with modern amenities and close proximity to the beach.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17065599.jpg?k=eeac875a8f6547c9b58110ff91bec172506b134d45f4146af741baf59c7053df&o=&hp=1",
    price: 2000,
    location: "Candolim, Goa",
    country: "India"
  },
  {
    title: "The Oberoi Udaivilas",
    dscrpt: "A luxury hotel showcasing the rich heritage of Mewar region.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/273425581.jpg?k=a6d2047f5441875a00f177b8784fe31fded7b366ce70f413eb0ca586f682cf57&o=&hp=1",
    price: 2500,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Bukhara",
    dscrpt: "Renowned for its rustic ambiance and North-West Frontier cuisine.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/a9/53/cb/caption.jpg?w=1100&h=600&s=1",
    price: 3120,
    location: "New Delhi",
    country: "India"
  },
  {
    title: "Karma Royal Haathi Mahal",
    dscrpt: "A villa resort blending Goan and Portuguese architecture.",
    img: "https://pix8.agoda.net/hotelImages/445/445975/445975_17060214340053430020.jpg?ca=6&ce=1&s=1024x",
    price: 1800,
    location: "Cavelossim, Goa",
    country: "India"
  },
  {
    title: "Taj Lake Palace",
    dscrpt: "A floating palace offering a royal experience on Lake Pichola.",
    img: "https://cdn.sanity.io/images/ocl5w36p/prod2/8dadb81ec4b464aba4134a5216e1b97140b92f92-1720x1112.jpg?w=1280&format=auto&dpr=2",
    price: 4500,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Wasabi by Morimoto",
    dscrpt: "An upscale Japanese restaurant by Chef Masaharu Morimoto.",
    img: "https://th.bing.com/th/id/OLC.MQq60jjBCPyF1g480x360?&w=1200&h=900&rs=1&pid=ImgDetMain",
    price: 2200,
    location: "Mumbai, Maharashtra",
    country: "India"
  },
  {
    title: "The Riverview Retreat - Corbett Resort",
    dscrpt: "A serene villa resort nestled along the Kosi River.",
    img: "https://res.cloudinary.com/simplotel/image/upload/x_277,y_0,w_1270,h_1216,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/the-riverview-retreat-corbett/Deluxe_Cottage_(2)",
    price: 1600,
    location: "Jim Corbett National Park, Uttarakhand",
    country: "India"
  },
  {
    title: "The Leela Palace",
    dscrpt: "A hotel that epitomizes the grandeur of the Vijayanagara empire.",
    img: "https://cdn-img.readytotrip.com/t/1024x768/content/b8/45/b845b5932315a9423beff94d9c62c3634becd9fd.JPEG",
    price: 5400,
    location: "Bengaluru, Karnataka",
    country: "India"
  },
  {
    title: "Karavalli",
    dscrpt: "Specializes in traditional Southwestern coastal Indian cuisine.",
    img: "https://th.bing.com/th/id/OIP.xt7EzeWaymLvLrw5OrX2lAHaFv?rs=1&pid=ImgDetMain",
    price: 6700,
    location: "Bengaluru, Karnataka",
    country: "India"
  },
  {
    title: "Marari Villas",
    dscrpt: "Boutique villas offering an authentic Keralan experience by the beach.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max500/222867056.jpg?k=d6def45a0a45bebb0623f2ae0f023bd860157eacffe4638896c9339314cc9d14&o=",
    price: 1400,
    location: "Mararikulam, Kerala",
    country: "India"
  },
  {
    title: "The Oberoi Amarvilas",
    dscrpt: "A luxury hotel with views of the Taj Mahal from every room.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/572184702.jpg?k=1763ff9c369a1d0707224adeadbdf4bcccd809fdb11b698cd5cd11ad6a906cf0&o=",
    price: 4800,
    location: "Agra, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Villa Shanti",
    dscrpt: "A boutique hotel blending French colonial and Tamil architecture.",
    img: "https://imperiobanus.com/wp/wp-content/uploads/2018/04/1-1.jpg",
    price: 1510,
    location: "Puducherry",
    country: "India"
  },
  {
    title: "The Tamara Coorg",
    dscrpt: "An eco-friendly luxury resort amidst coffee plantations.",
    img: "https://cdn.hassanallam.com/app/uploads/2022/05/COVA-Mockup-64.jpg",
    price: 2200,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Le Dupleix",
    dscrpt: "A heritage hotel offering a blend of modern luxury and old-world charm.",
    img: "https://digital.ihg.com/is/image/ihg/intercontinental-bucharest-8005817124-2x1",
    price: 1560,
    location: "Puducherry",
    country: "India"
  },
  {
    title: "Ananda in the Himalayas",
    dscrpt: "A luxury wellness retreat focusing on yoga and Ayurveda.",
    img: "https://images.ctfassets.net/rxqefefl3t5b/6FY66XaCcxn6FjA5qq4OxP/d827c64f63dd42039b5e5ed936a0c048/220504_Virgin_NY_Model_Rooms_24038.jpg?fl=progressive&q=80",
    price: 3500,
    location: "Narendra Nagar, Uttarakhand",
  }];

  module.exports = {data : sampleListings};
 
