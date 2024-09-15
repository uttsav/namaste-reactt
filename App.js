import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
    Logo
    Nav Items
  
  Body
    Search
    Restuarant Container
      -Card
  
  Footer
    -copy right 
    -address and links
    
 */

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="https://dcassetcdn.com/design_img/1889677/444768/444768_10393234_1889677_85203911_image.png"
      ></img>
    </div>
    <div className="nav-items">
      <ul>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

const RestaurantCard = (props) => {
  const {
    resName,
    imgSrc,
    cusines,
    rating,
    deliveryTime,
    costForTwo,
    areaName,
  } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={imgSrc}></img>
      <div className="res-details">
        <h4 className="res-name">{resName}</h4>
        <p className="cusines-values">{cusines}</p>
        <p className="rating-delivery">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="rating-delivery-value">
            {rating} • {deliveryTime} Minutes
          </span>
        </p>
        <p className="cost-for-two">{costForTwo}</p>
        <p className="areaName">{areaName}</p>
      </div>
    </div>
  );
};

const imagianaryURL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const resObj = [
  {
    info: {
      id: "117666",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/a47890a4-feb5-4290-a10f-abee335eb0a7_117666.JPG",
      locality: "Vivekanand Society",
      areaName: "Race Course Road",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "2.8K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:25:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/subway-vivekanand-society-race-course-road-rest117666",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "518648",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/662bb58f-7b46-40e3-938a-6ca094b2677a_518648.JPG",
      locality: "Crystal Mall",
      areaName: "Kalawad Road",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-16 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/burger-king-crystal-mall-kalawad-road-rest518648",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "748877",
      name: "Kwality Walls Ice Cream and More",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a2fbdd94-b3af-4fab-89c8-6fd240cd6951_748877.JPG",
      locality: "Amin Marg Main Road",
      areaName: "Star Apartment",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      veg: true,
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "234",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/kwality-walls-ice-cream-and-more-amin-marg-main-road-star-apartment-rest748877",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "105265",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "i4cbbwvbkqltewpyezyf",
      locality: "Crystal Mall",
      areaName: "Nana Mava",
      costForTwo: "₹300 for two",
      cuisines: ["Barbecue", "Biryani", "Kebabs", "Mughlai", "Desserts"],
      avgRating: 4.2,
      parentId: "10804",
      avgRatingString: "4.2",
      totalRatingsString: "8.5K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/ubq-by-barbeque-nation-crystal-mall-nana-mava-rest105265",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "85692",
      name: "The Grand Thakar - TGT",
      cloudinaryImageId: "aqjtcoxwuvbcnykea5ci",
      locality: "Jhulelal Nagar",
      areaName: "Jubeli Chowk",
      costForTwo: "₹400 for two",
      cuisines: [
        "Gujarati",
        "Punjabi",
        "Chinese",
        "Italian",
        "Continental",
        "Mexican",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "257532",
      avgRatingString: "4.5",
      totalRatingsString: "53K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 0.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "0.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/the-grand-thakar-tgt-jhulelal-nagar-jubeli-chowk-rest85692",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "85860",
      name: "Sargam Food",
      cloudinaryImageId: "bqgtntm79sjwhd5kdajl",
      locality: "Kasturba Road",
      areaName: "Kasturba Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Punjabi",
        "Chinese",
        "South Indian",
        "fastfood",
        "Pizzas",
        "Snacks",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "178390",
      avgRatingString: "4.5",
      totalRatingsString: "85K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹25",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/sargam-food-kasturba-road-rest85860",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "93166",
      name: "Yadav Food Zone",
      cloudinaryImageId: "yyeejxvk0uq78cxlqjzs",
      locality: "Rohini",
      areaName: "Kotecha Chowk",
      costForTwo: "₹200 for two",
      cuisines: ["Gujarati", "Thalis", "Punjabi"],
      avgRating: 4.3,
      veg: true,
      parentId: "227330",
      avgRatingString: "4.3",
      totalRatingsString: "28K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 15:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/yadav-food-zone-rohini-kotecha-chowk-rest93166",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "83618",
      name: "Adingo",
      cloudinaryImageId: "9da025e43b78745e0c60a2ecc3960645",
      locality: "Subhash Road",
      areaName: "Limda Chowk",
      costForTwo: "₹250 for two",
      cuisines: [
        "Gujarati",
        "Thalis",
        "Punjabi",
        "Biryani",
        "Fast Food",
        "Beverages",
        "Chinese",
        "kathiyawadi",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "27145",
      avgRatingString: "4.4",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/adingo-subhash-road-limda-chowk-rest83618",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "179018",
      name: "The Grand Thakkar Restaurant",
      cloudinaryImageId: "av8bconcgezv75wnxqon",
      locality: "Kothariya Colony",
      areaName: "80 Ft Road",
      costForTwo: "₹250 for two",
      cuisines: ["Thalis", "Gujarati", "Punjabi", "Chinese", "South Indian"],
      avgRating: 4.2,
      veg: true,
      parentId: "230568",
      avgRatingString: "4.2",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 15:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/the-grand-thakkar-restaurant-kothariya-colony-80-ft-road-rest179018",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "589730",
      name: "The Shree Parcel Point",
      cloudinaryImageId: "b95e7081f8ffa5a53a34aefbd8e4c6ae",
      locality: "Kalawad Road",
      areaName: "University Road",
      costForTwo: "₹200 for two",
      cuisines: ["Punjabi", "Gujarati", "Chinese", "Thalis"],
      avgRating: 4.3,
      veg: true,
      parentId: "352718",
      avgRatingString: "4.3",
      totalRatingsString: "5.4K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 15:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹49",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/the-shree-parcel-point-kalawad-road-university-road-rest589730",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "140424",
      name: "Anjali Restaurant - Nirmala Road",
      cloudinaryImageId: "toebeqdrejrq3r25yqfx",
      locality: "Kalawad Road",
      areaName: "Nirmala Convent Road",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Biryani"],
      avgRating: 4.3,
      veg: true,
      parentId: "33574",
      avgRatingString: "4.3",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 14:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/anjali-restaurant-nirmala-road-kalawad-road-nirmala-convent-road-rest140424",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "214923",
      name: "Iqbal Restaurant",
      cloudinaryImageId: "umnt1isog8xq57hijqek",
      locality: "Lohana Para",
      areaName: "Lakhajiraj Road",
      costForTwo: "₹300 for two",
      cuisines: ["Mughlai", "Biryani", "Tandoor", "Kebabs", "Seafood"],
      avgRating: 4.5,
      parentId: "107307",
      avgRatingString: "4.5",
      totalRatingsString: "8.3K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/iqbal-restaurant-lohana-para-lakhajiraj-road-rest214923",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "563201",
      name: "The Chef's Kitchen Foods",
      cloudinaryImageId: "0d42cff5bada7d466693bd94e0a8ae37",
      locality: "Rajputpara",
      areaName: "Trikon Baug Chowk",
      costForTwo: "₹300 for two",
      cuisines: ["Punjabi", "Chinese", "Gujarati", "Thalis"],
      avgRating: 4.2,
      veg: true,
      parentId: "338878",
      avgRatingString: "4.2",
      totalRatingsString: "3.5K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/the-chefs-kitchen-foods-rajputpara-trikon-baug-chowk-rest563201",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "84297",
      name: "Babji Grill Kitchen",
      cloudinaryImageId: "jo5mbzzqd16zzoz9ayxr",
      locality: "Beldar Street\n",
      areaName: "Sadar Bazar",
      costForTwo: "₹350 for two",
      cuisines: ["Mughlai", "Biryani", "Arabian", "Kebabs", "Tandoor"],
      avgRating: 4.4,
      parentId: "6479",
      avgRatingString: "4.4",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Biryani.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Biryani.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/babji-grill-kitchen-beldar-street-sadar-bazar-rest84297",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "779955",
      name: "Sonali Restaurant - Race Course",
      cloudinaryImageId: "96fc60949d6056c4ce537d41745a4d39",
      locality: "Vithal Appartment",
      areaName: "Race Course Road",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "Fast Food", "Pizzas"],
      avgRating: 4.6,
      veg: true,
      parentId: "484792",
      avgRatingString: "4.6",
      totalRatingsString: "2.4K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:20:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Dosa.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pav%20Bhaji.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pav%20Bhaji.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/sonali-restaurant-race-course-vithal-appartment-race-course-road-rest779955",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "129512",
      name: "Shreeji Prasadam",
      cloudinaryImageId: "swgowk0bggcpvkdswxap",
      locality: "Dhebar Road",
      areaName: "80FtRoad",
      costForTwo: "₹250 for two",
      cuisines: ["Gujarati", "Sweets", "Bakery", "Fast Food"],
      avgRating: 4.6,
      veg: true,
      parentId: "185964",
      avgRatingString: "4.6",
      totalRatingsString: "8.2K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/shreeji-prasadam-dhebar-road-80ftroad-rest129512",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "746858",
      name: "Sargam Kitchen",
      cloudinaryImageId: "dfe4b0b74955f43ba780b1e0019168af",
      locality: "Race Course Road",
      areaName: "Kasturba Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "Punjabi",
        "Chinese",
        "South Indian",
        "Burgers",
        "Pizzas",
        "Fast Food",
      ],
      avgRating: 4.5,
      veg: true,
      parentId: "442936",
      avgRatingString: "4.5",
      totalRatingsString: "1.6K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹25",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/sargam-kitchen-race-course-road-kasturba-road-rest746858",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "651559",
      name: "Rajdhani Parcel Point",
      cloudinaryImageId: "c7721254a32a2101728b75dc4d5846c8",
      locality: "150 Feet Ring Road",
      areaName: "150 Ft Ring Road",
      costForTwo: "₹200 for two",
      cuisines: ["Punjabi", "Gujarati", "Chinese", "Thalis"],
      avgRating: 4.3,
      veg: true,
      parentId: "406278",
      avgRatingString: "4.3",
      totalRatingsString: "3.4K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-16 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹65",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/rajdhani-parcel-point-150-feet-ring-road-150-ft-ring-road-rest651559",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "223427",
      name: "Ganesh Restaurant - Mavdi",
      cloudinaryImageId: "wkx1m8jirmbsen5fpe8t",
      locality: "Mavdi Chowk",
      areaName: "Mavdi",
      costForTwo: "₹250 for two",
      cuisines: [
        "Thalis",
        "Punjabi",
        "Gujarati",
        "Chinese",
        "South Indian",
        "Fast Food",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "85965",
      avgRatingString: "4.6",
      totalRatingsString: "6.9K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 15:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/ganesh-restaurant-mavdi-chowk-mavdi-rest223427",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "349204",
      name: "Premvatika Restaurant",
      cloudinaryImageId: "sbcalgzpgee8metqhc7b",
      locality: "Gautamnagar",
      areaName: "Ramdevpir Chowk",
      costForTwo: "₹300 for two",
      cuisines: ["Gujarati", "Punjabi", "Chinese", "North Indian", "Biryani"],
      avgRating: 4.4,
      veg: true,
      parentId: "161048",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-15 16:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹119",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/rajkot/premvatika-restaurant-gautamnagar-ramdevpir-chowk-rest349204",
      type: "WEBLINK",
    },
  },
];

const Body = () => (
  <div className="body">
    <div className="search">Search Bar</div>
    <div className="res-container">
      {resObj.map((item, index) => (
        <RestaurantCard
          resName={item.info.name}
          cusines={item.info.cuisines.join(",")}
          rating={item.info.avgRating}
          deliveryTime={item.info.sla.deliveryTime}
          imgSrc={imagianaryURL + item.info.cloudinaryImageId}
          costForTwo={item.info.costForTwo}
          key={item.info.id}
          areaName={item.info.areaName}
        />
      ))}
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
