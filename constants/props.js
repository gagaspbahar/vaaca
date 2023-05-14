const DestinationDetailProps = {
  title: "Museum Ullen Sentalu",
  photo: require("../assets/destination_placeholder.png"),
  location: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun",
  rating: 4.7,
  description:
    "Menapakkan kaki di kawasan Museum Ullen Sentalu terasa balutan hawa sejuk (15-25° Celcius) dan suasana hening yang menyatu dengan alam pegunungan disekitranya yang sekaligus memberikan rasa damai serta khidmat. Area seluas 1,2 hektar yang dikembangkan secara bertahap tersebut bernama Dalem Kaswargan atau Rumah Surga, dimana Museum Ullen Sentalu berada. Jalan masuk menuju ruang pamer museum maupun artshop dan restoran berupa kelokan, undakan, serta labirin akan memberikan nuansa nostalgia, perenungan dan keindahan. Beberapa bagian bangunan dan unsur yang melengkapinya, seperti gapura, dinding tembok, taman, kolam, mencerminkan keagungan budaya leluhur yang sudah ada sejak masa silam. Berbagai jenis unsur bangunan Jawa terlihat pada layout dan struktur bangunan bergaya Indis dan post-mo yang bersatu-padu menciptakan harmoni secara menakjubkan. Koleksi berupa lukisan dan foto foto tokoh sejarah budaya Mataram Islam, kain batik vorstenlanden, karya sastra, arca arca kebudayaan Hindu Buddha, dan koleksi etnografi era Mataram Islam. Itu membingkai kisah sosial ekonomi politik seni sejarah dan budaya Jawa, terutama kisah para putri di kraton Mataram yang tidak banyak dikisahkan kepada masyarakat awam.",
};

const DestinationsDatabase = [
  {
    name: "Museum Ullen Sentalu",
    location: "Jl. Boyong No.KM 25, Kaliurang, Hargobinangun",
    title: "Museum Ullen Sentalu",
    photo: require("../assets/destination_placeholder.png"),
    rating: 4.7,
    description:
      "Menapakkan kaki di kawasan Museum Ullen Sentalu terasa balutan hawa sejuk (15-25° Celcius) dan suasana hening yang menyatu dengan alam pegunungan disekitranya yang sekaligus memberikan rasa damai serta khidmat. Area seluas 1,2 hektar yang dikembangkan secara bertahap tersebut bernama Dalem Kaswargan atau Rumah Surga, dimana Museum Ullen Sentalu berada. Jalan masuk menuju ruang pamer museum maupun artshop dan restoran berupa kelokan, undakan, serta labirin akan memberikan nuansa nostalgia, perenungan dan keindahan. Beberapa bagian bangunan dan unsur yang melengkapinya, seperti gapura, dinding tembok, taman, kolam, mencerminkan keagungan budaya leluhur yang sudah ada sejak masa silam. Berbagai jenis unsur bangunan Jawa terlihat pada layout dan struktur bangunan bergaya Indis dan post-mo yang bersatu-padu menciptakan harmoni secara menakjubkan. Koleksi berupa lukisan dan foto foto tokoh sejarah budaya Mataram Islam, kain batik vorstenlanden, karya sastra, arca arca kebudayaan Hindu Buddha, dan koleksi etnografi era Mataram Islam. Itu membingkai kisah sosial ekonomi politik seni sejarah dan budaya Jawa, terutama kisah para putri di kraton Mataram yang tidak banyak dikisahkan kepada masyarakat awam.",
  },
  {
    name: "Hutan Plunyon",
    location: "Plunyon",
    title: "Hutan Plunyon",
    photo: require("../assets/hutan.png"),
    rating: 4.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
  },
  {
    name: "Waduk Sermo",
    location: "Plunyon Kali Kuning Desa Umbulharjo",
    title: "Waduk Sermo",
    photo: require("../assets/waduk-sermo.png"),
    rating: 4.3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam",
  },
];

const ReviewsDatabase = [
  {
    title: "OG Itinerary Plan",
    photo: require("../assets/destination_placeholder.png"),
    location: "Jogjakarta",
    days: 3,
    type: "Nature",
    price: "3.000k",
    description: "Liburan kuliah semester 5",
    likes: 10,
    duplicates: 10,
    reviewerName: "John Doe",
    reviewerPhoto: require("../assets/profilepic.png"),
    reviewerFollowers: 12434,
    reviewContent: `In need of some travel inspiration? Look no further! I recently discovered Munduk Waterfall and it has quickly become my top recommendation for fellow adventurers. From vibrant cities to serene landscapes, this place has something for everyone. 🗺️🌴 #TravelRecommendation #MustVisitDestination #AdventureAwaits`,
  },
  {
    title: "Jalan jalan di Jogja",
    photo: require("../assets/waduk-sermo.png"),
    location: "Jogjakarta",
    days: 3,
    type: "Nature",
    price: "3.000k",
    description: "Liburan kuliah semester 5",
    likes: 10,
    duplicates: 10,
    reviewerName: "Bahar",
    reviewerFollowers: Math.round(Math.random() * 10000),
    reviewerPhoto: require("../assets/profilepic.png"),
    reviewContent: `Ini seru sekali, aku suka aku suka!!`,
  },
  {
    title: "Itinerary Plan 12",
    photo: require("../assets/destination_placeholder.png"),
    location: "Jogjakarta",
    days: 3,
    type: "Nature",
    price: "3.000k",
    description: "Liburan kuliah semester 5",
    likes: 10,
    duplicates: 10,
    reviewerName: "Dhiya Maharani",
    reviewerFollowers: Math.round(Math.random() * 10000),
    reviewerPhoto: require("../assets/icon-square.png"),
    reviewContent: `I am cool and i want to travel recommendation i like you guys lets go brothers 🗺️🌴 #TravelRecommendation #MustVisitDestination #AdventureAwaits`,
  },
  {
    title: "This is Real",
    photo: require("../assets/hutan.png"),
    location: "Jogjakarta",
    days: 3,
    type: "Nature",
    price: "3.000k",
    description: "Liburan kuliah semester 5",
    likes: 10,
    duplicates: 10,
    reviewerName: "John Doe",
    reviewerFollowers: Math.round(Math.random() * 10000),
    reviewerPhoto: require("../assets/adaptive-icon.png"),
    reviewContent: `In need of some travel inspiration? Look no further! I recently discovered Munduk Waterfall and it has quickly become my top recommendation for fellow adventurers. From vibrant cities to serene landscapes, this place has something for everyone. 🗺️🌴 #TravelRecommendation #MustVisitDestination #AdventureAwaits`,
  },
];

const ItineraryDatabase = [
  {
    id: 0,
    title: "Itinerary Plan 1",
    photo: require("../assets/destination_placeholder.png"),
    location: "Jogjakarta",
    days: 3,
    type: "Nature",
    price: "3.000k",
    description: "Liburan kuliah semester 5",
    destinations: [
      {
        day: 1,
        id: 0,
      },
      {
        day: 1,
        id: 2,
      },
      {
        day: 2,
        id: 2,
      },
      {
        day: 2,
        id: 1,
      },
      {
        day: 3,
        id: 0,
      },
    ],
  },
  {
    id: 1,
    title: "The Plan",
    days: 2,
    photo: require("../assets/waduk-sermo.png"),
    location: "Jogjakarta",
    type: "All",
    price: "5.000k",
    description: "Healing trip",
    destinations: [
      {
        day: 1,
        id: 0,
      },
      {
        day: 1,
        id: 2,
      },
      {
        day: 1,
        id: 1,
      },
      {
        day: 2,
        id: 2,
      },
    ],
  },
];

export {
  DestinationDetailProps,
  DestinationsDatabase,
  ReviewsDatabase,
  ItineraryDatabase,
};
