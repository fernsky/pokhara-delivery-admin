import { decodeSingleChoice, decodeMultipleChoices } from "./utils";
export const businessChoices = {
  accomodation_types: {
    food_only: "खानाको मात्र व्यवस्था भएको",
    accomodation_only: "बासको मात्र व्यवस्था भएको",
    both_food_and_accomodation: "खाना तथा बासको व्यवस्था भएको",
  },
  agri_business: {
    agriculatural_products:
      "कृषि उपजको उत्पादन (मौसमी/बेमौसमी तरकारी, फलफुल, आदि)",
    animal_husbandry: "पशु पालन (गाई, भौसी, बाख्रा, बंगुर, सुंगुर, आदि)",
    bird_husbandry:
      "पन्छी पालन (कुखुरा, हाँस, टर्की, बट्टाइ, कालिज, अष्ट्रिच, परेवा, आदि)",
    fish_farming: "माछा पालन",
    bee_keeping: "मौरी पालन",
  },
  animal_prods: {
    milk: "दुध",
    milk_product: "दुधजन्य वस्तु (ध्यू, चिज, मखन आदि)",
    egg: "अण्डा",
    meat: "मासु",
    other: "अन्य",
  },
  animal_prods_unit: {
    litre: "लिटर",
    kilogram: "किलो",
    count: "गोटा ",
    other: "अन्य",
  },
  animals: {
    hybrid_cow: "ऊन्नत जातको गाई",
    local_cow: "लोकल गाई",
    egg_layer_hen: "लेयर्स कुखुरा",
    broiler_hen: "ब्रोईलर कुखुरा",
    local_hen: "लोकल कुखुरा",
    buffalo: "भैंसी/राँगा",
    goat: "भेडा/बाख्रा/च्याङ्ग्र",
    pig: "बंगुर/सुंगुर",
    horse: "घोडा/खच्चर/गधा",
    other_animal: "अन्य पशु",
    hen: "कुखुरा",
    duck: "हाँस",
    kalij: "कालिज",
    turkey: "टर्की",
    other_bird: "अन्य पन्छी",
  },
  business_location_ownerships: {
    own_house: " आफ्नै घरमा/जग्गामा ",
    others_house: " अरुको घर/जग्गा भाडामा लिएर ",
    taking_rent_on_others_house: " अरुको जग्गा भाडामा लिएर घर टहरा बनाएको  ",
    other: "अन्य ",
  },
  business_natures: {
    product_sales: "वस्तु (मालसामान)को बिक्री",
    service_sales: "सेवाको बिक्री",
    product_production: "वस्तुको उत्पादन",
    agriculture_livestock_fish_and_beekeeping_farm:
      "कृषि, पशुपन्छी, माछा तथा मौरी पालन फार्म ",
    other: "अन्य",
  },
  business_ownerships: {
    personal: "व्यक्तिगत",
    partnership: "साझेदारी",
    other: "अन्य",
  },
  business_types: {
    grocery_and_provision_shop: "खाद्यान्न बिक्री",
    fish_meat_sales: "माछा मासु बिक्री",
    bakery_sales: "बेकरी बिक्री",
    dairy_products_sales: "दुधजन्य बस्तुहरु बिक्री",
    alcohol_and_beverages: "अल्कोहल तथा बेभरेज",
    pharmacy_and_surgical_shop: "औषधी तथा सर्जिकल पसल",
    vegetables_and_fruits_sales: "तरकारी तथा फलफुल बिक्री",
    stationery_and_book_shop: "स्टेशनरी तथा किताब पसल",
    sports_equipment_sales: "खेलकुदका सामग्री बिक्री",
    clothing_shop: "कपडा पसल",
    fancy_store: "फेन्सी स्टोर",
    shoes_and_slippers: "जुत्ता चप्पल",
    cosmetic_and_gift_shop: "कस्मेजकि तथा गिफ्ट पसल",
    vehicles_motorcycles: "गाडी, मोटरसाइकल (इन्जीनले चल्ने साधनहरू बिक्री) ",
    "bicycles_rickshaws,_autorickshaws_battery":
      "साइकल, रिक्सा, अटोरिक्सा (ब्याट्रिबाट चल्ने) ",
    motor_parts: "मोटरपार्टस्",
    hardware_building_materials: "हार्डवयर निर्माण सामाग्री (रड, सिमेन्ट.....)",
    glass_plywood_and_foam: "सिसा, प्लाईऊड तथा फोम",
    gold_and_silver_manufacturing_and_sales: "सुनचाँदी बनाउने तथा बिक्री गर्ने",
    optical_shop: "चश्म पसल",
    tailoring_and_cutting_shops: "सिलाई कटाई पसलहरू",
    furniture: "फर्निचर",
    flooring_and_furnishing_items: "फ्लोरिङ तथा फर्निसिंगको सामानहरू",
    paint: "रंगरोगन",
    industrial_materials: "औद्योगिक सामाग्रीहरू",
    petroleum_products: "पेट्रोलियम पदार्थ",
    electric_and_electronic_goods_sales:
      "इलेक्ट्रिक तथा इलेक्ट्रोनिक बस्तु बिक्री",
    computer_mobile_and_accessories_sales_and_maintenance:
      "कम्प्युटर/मोबाइल र यसको पाटपूर्जा बिक्री तथा ममर्त समेत",
    other_trades: "अन्य व्यापार ......",
    hotel_lodge_and_restaurant: "होटल, लज तथा रेष्टुरेन्ट",
    hospital_and_clinic: "हस्पिटल तथा क्लिनिक",
    travel_agency: "ट्राभल एजेन्सी",
    "banking,_financial_and_monetary_transactions":
      "बैंक, वित्तीय तथा मौद्रिक कारोबार ",
    "life_and_non-life_insurance_company":
      "जीवन तथा निर्जीवन बीमा गर्ने संस्था ",
    radio_and_television_operation: "रेडियो तथा टेलिभिजन संचालन",
    consultancy_auditing: "कन्सल्टेन्सी, लेखा परीक्षण",
    cinema_hall_and_entertainment: "सिनेमा हल तथा मनोरन्जनात्मक",
    secretarial_services_photocopy_lamination:
      "सेक्रेटरियल कार्य फोटोकपि, लेमिनेशन",
    photography_and_color_lab_photo_taking_developing:
      "फोटोग्राफी तथा कलर ल्याव (फोटो खिच्ने, धुलाउने)",
    rice_maize_wheat_grinding_milling_mill:
      "धान, मकै, गहुँ (कुटानी पिसानी मिल)",
    gold_and_silver_jewelry_making: "सुन चाँदीका गरगहना बनाउने",
    beauty_parlor: "ब्यूटी पार्लर",
    salon_haircutting: "सैलुन/कपाल काट्ने",
    other_service_sales: "अन्य सेवा बिक्री .......",
    concrete_block_brick_hume_pipe: "कन्क्रीट, ब्लक, इटा, ह्युमपाइप",
    metal_products_manufacturing_metal_production:
      "धातुका बस्तु बनाउने (मेटल) उत्पादन",
    vehicle_body_making_repairing: "गाडीको बडी बनाउने/मर्मत गर्ने",
    household_utensils_manufacturing: "घरायसी प्रयोजनका भाडा वर्तन बनाउने",
    furniture_manufacturing_and_sawmill: "फर्निचर निर्माण तथा समिल",
    biscuit_noodles_confectionery_production:
      "बिष्कुट, चाउचाउ, कन्फेक्सनरी उत्पादन",
    dal_moth_papad_production: "दालमोठ, पापड उत्पादन",
    oil_and_ghee_production: "तेल तथा ध्यू उत्पादन",
    solid_food_production: "ठोस खाद्यपदार्थ उत्पादन गर्ने",
    sesame_food_production: "तिल खाद्य पदार्थ उत्पादन गर्ने",
    shoes_and_slippers_manufacturing: "जुत्ता चप्पल निर्माण",
    soap_shampoo_production: "साबुन/स्याम्पु उत्पादन",
    mineral_water_production: "मिनिरल पानी उत्पादन",
    incense_agarbatti_candle_production: "धुप, अगरबत्ति, मैनबत्ति उत्पादन",
    stationery_items_manufacturing: "स्टेशनरीका सामग्रीको निर्माण",
    animal_feed_industry: "पशुपन्छीको दाना उद्योग",
    clothing_production: "कपडा उत्पादन",
    thread_production: "धागो उत्पादन",
    plastic_products_manufacturing: "प्लाष्टिकका सामाग्री उत्पादन",
    building_materials_production: "निर्माण सामाग्रीको उत्पादन",
    printing_press: "प्रिन्टिङ प्रेस",
    other_industries: "अन्य उद्योग .......",
  },
  cash_crops: {
    tea: "चिया",
    betel_nut: "सुपारी",
    tobacco: "सुर्ती",
    cardamom: "अलैंची",
    cotton: "कपास",
    jute: "जुट/सनपाट",
    rubber: "रबर",
    coffee: "कफी",
    sugar_cane: "उखु",
    other: "अन्य नगदेबाली",
    none: "कुनै नगदेबाली उत्पदान गर्दिन",
  },
  countries: {
    azerbaijan: "अजरबैजान",
    niger: "नाइजर",
    nigeria: "नाइजेरिया",
    nicaragua: "निकारागुवा",
    the_netherlands: "नेदरल्याण्ड",
    norway: "नर्वे",
    nepal: "नेपाल",
    new_zealand: "न्यूजिल्याण्ड",
    permission: "अनुमोज",
    panama: "पनामा",
    peru: "पेरु",
    bosnia: "बोस्निया",
    philippines: "फिलिपिन्स",
    pakistan: "पाकिस्तान",
    poland: "पोल्याण्ड",
    portugal: "पोर्चुगल",
    puerto_rico: "पोर्टोरिको",
    paraguay: "पाराग्वै",
    qatar: "कतार",
    interpol: "इन्टरपोल",
    romania: "रोमानिया",
    bangladesh: "बंगलादेश",
    russia: "रुस",
    saudi_arabia: "साउदी अरेबिया",
    cecils: "सेसेल्स",
    sridan: "सृडान",
    sweden: "स्वीडेन",
    singapore: "सिंगापुर",
    sierra_leone: "सियरा लियोन",
    san_marino: "सानमारिनो",
    senegal: "सेनेगल",
    somalia: "सोमालिया",
    belgium: "बेल्जियम",
    syria: "सिरिया",
    festival: "चाड",
    togo: "टोगो",
    thailand: "थाईल्याण्ड",
    tajikistan: "ताजिकस्तान",
    bite: "टोक्यो",
    tunisia: "ट्युनिसिया",
    tonga: "टोङगा",
    east_timor: "पूर्वी टिमोर",
    turkey: "टर्की",
    bulgaria: "बुल्गेरिया",
    taiwan: "ताइवान",
    tanzania: "तान्जानिया",
    dungland: "डङ्गल्याण्ड",
    ukraine: "युक्रेन",
    uganda: "युगान्डा",
    united_nations: "संयुक्त राष्ट्र संघ",
    united_states_of_america: "संयुक्त राज्य अमेरिका",
    uruguay: "उरुग्वै",
    uzbekistan: "उज्वेकिस्तान",
    bahrain: "बहराईन",
    vatican_city: "भ्याटिकन सिटी",
    venezuela: "भेनेजुएला",
    vietnam: "भियतनाम",
    flour: "भान्\u200cआटा",
    wells: "वेल्स",
    western_samoa: "पश्चिमी समोआ",
    yemen: "यमन",
    tokyo: "टोकियो",
    yugoslavia: "युगोस्लाभिया",
    south_africa: "दक्षिण अफ्रिका",
    burundi: "बुरुन्डी",
    zambia: "जाम्बिया",
    zaire: "जायर",
    zimbabwe: "जिम्बावै",
    kosovo: "कोसोभो",
    brunei: "ब्रुनाई",
    bolivia: "बोलिभिया",
    brazil: "ब्राजिल",
    united_arab_emirates: "संयुक्त अरब ईमिरेटस",
    bahamas: "बहामास",
    bhutan: "भूटान",
    botswana: "बोत्स्वाना",
    belarus: "बैलारुस",
    canada: "क्यानडा",
    cambodia: "कम्बोडीया",
    congo: "कंगो",
    switzerland: "स्विटजरल्याण्ड",
    croatia: "क्रोएसिया",
    chile: "चिली",
    afghanistan: "अफगानिस्तान",
    cameroon: "क्यामरुन",
    china: "चीन",
    colombia: "कोलम्बीया",
    costa_rica: "कोष्टारिका",
    cuba: "क्युवा",
    cyprus: "साईप्रस",
    czechoslovakia: "चेकोस्लोभाकिया",
    germany: "जर्मनी",
    dubai: "दुवैइ ",
    denmark: "डेनमार्क",
    albania: "अल्बानिया",
    dominica: "डोमिनीका",
    algeria: "अल्जेरिया",
    ecuador: "इक्वेडर",
    egypt: "इजिप्ट",
    spain: "स्पेन",
    ethiopia: "इथियोपिया",
    finland: "फिन्ल्याण्ड",
    fiji: "फिजी",
    fawns: "फान्स",
    united_kingdom_of_great_britain: "संयुक्त अधिराज्य बेलायत",
    armenia: "अर्मनिया",
    ghana: "घाना",
    gambia: "गाम्बिया",
    guinea: "गिनी",
    greece: "ग्रीस",
    guatemala: "ग्वाटेमाला",
    hong_kong: "हङकङ",
    the_air: "हवाई",
    haiti: "हाइटी",
    hungary: "हङ्गेरि",
    indonesia: "ईण्डोनेसिया",
    angola: "अङ्गोला",
    republic_of_ireland: "आयरल्याण्ड रिपब्लीक",
    israel: "ईजरायल",
    india: "भारत",
    iraq: "इराक",
    iran: "इरान",
    iceland: "आईसल्याण्ड",
    italy: "ईटाली",
    jamaica: "जमैका",
    jordan: "जोर्डन",
    japan: "जापान",
    argentina: "अर्जेन्टिना",
    kenya: "केन्या",
    north_korea: "उत्तर कोरिया",
    south_korea: "दक्षिण कोरिया",
    kathmandu: "काठमाण्डौ",
    krvet: "कृ्\u200cवेत",
    kazakhstan: "काजकस्तान",
    arshatya: "अर्षट्या",
    lebanon: "लेवनान",
    herzegovina: "हर्जगोभिना",
    australia: "अष्ट्रेलिया",
    sri_lanka: "श्रीलंका",
    liberia: "लाईबैेरिया",
    lesotho: "लिसोथो",
    luxembourg: "लक्जेम्वर्ग",
    leon: "लियोन",
    libya: "लिबिया",
    morocco: "मोरक्को",
    monaco: "मोनाको",
    madagascar: "माडागास्कर",
    the_gardener: "माली",
    aruba: "अरुबा",
    myanmar: "म्यानमार",
    mongolia: "मंगोलिया",
    macau: "मकाउ",
    malta: "माल्टा",
    mauritius: "मौरीसस",
    maldives: "माल्दिभ्स",
    mexico: "मेक्सिको",
    malaysia: "मलेशिया",
    mozambique: "मोजाम्बिक",
    namibia: "नामीबिया",
  },
  districts: {
    "1": "ताप्लेजुङ ",
    "2": "पाँचथर ",
    "3": "ङ्लाम ",
    "4": "संखुवासभा ",
    "5": "तेह्रथुम",
    "6": "धनकुटा ",
    "7": "भोजपुर",
    "8": "खोटाङ",
    "9": "कास्की ",
    "10": "ओखलढुङ्गा ",
    "11": "उदयपुर",
    "12": "मोरंग ",
    "13": " मोरङ",
    "14": " सुनसरी",
    "15": "सप्तरी",
    "16": "सिराहा",
    "17": "धनुषा",
    "18": "महोतरी",
    "19": "सर्लाही",
    "20": "रौतहट",
    "21": "बारा",
    "22": "पर्सा",
    "23": "दोलखा",
    "24": "रामेछाप",
    "25": "सिन्धुली",
    "26": "काभ्रेपलाञ्चोक",
    "27": "सिन्धुपाल्चोक",
    "28": "रसुवा",
    "29": "नुवाकोट",
    "30": "धादिङ",
    "31": "चितवन",
    "32": "मकवानपुर",
    "33": "भक्तपुर",
    "34": "ललितपुर",
    "35": "काठमाडौँ",
    "36": "गोरखा",
    "37": "लम्जुङ",
    "38": "तनहुँ",
    "39": "कास्की",
    "40": "मनाङ",
    "41": "मुस्ताङ",
    "42": "पर्वत",
    "43": "स्याङ्जा",
    "44": "म्याग्दी",
    "45": "बाग्लुङ",
    "46": "नवलपरासी (बर्दघाट-सुस्ता पूर्व)",
    "47": "नवलपरासी (बर्दघाट-सुस्ता पश्चिम)",
    "48": "रूपन्देहि",
    "49": "कपिलवस्त्",
    "50": "पाल्पा",
    "51": "अर्घाखाँची",
    "52": "गुल्मी",
    "53": "रूकुम (पू्वि भाग)",
    "54": "मोरंग",
    "55": "प्युठान",
    "56": "मोरंग चौंलाखर्क",
    "57": "मोरंग",
    "58": "बर्दिया",
    "59": "रूकम (पश्चिम भाग)",
    "60": "सल्यान",
    "61": "डोल्पा",
    "62": "जुम्ला",
    "63": "मुगु",
    "64": "हम्ला",
    "65": "कालिकोट",
    "66": "जाजरकोट",
    "67": "दैलेख",
    "68": "सुर्खेत",
    "69": "बाजुरा",
    "70": "बझाङ",
    "71": "डोटी",
    "72": "अछाम",
    "73": "दार्चुला",
    "74": "बैतडी",
    "75": "डडेल्धुरा",
    "76": "कञ्चनपुर",
    "77": "कैलाली",
  },
  educational_level: {
    child_development_center: "बालविकास केन्द्र / मंटेस्वोरी",
    nursery: "नर्सरी/केजी ",
    "1": "कक्षा १ ",
    "2": "कक्षा २ ",
    "3": "कक्षा ३ ",
    "4": "कक्षा ४ ",
    "5": "कक्षा ५ ",
    "6": "कक्षा ६ ",
    "7": "कक्षा ७ ",
    "8": "कक्षा ८ ",
    "9": "कक्षा ९ ",
    "10": "कक्षा १० ",
    slc_level: "एसईई/एसएलसी/सो सरह ",
    class_12_level: "कक्षा १२ वा PCL वा सो सरह ",
    bachelor_level: "स्नातक वा सो सरह ",
    masters_level: "स्नातकोत्तर वा सो सरह ",
    phd_level: "पीएचडी वा सो सरह ",
    other: "अन्य ",
    informal_education: "अनौपचारिक शिक्षा ",
    educated: "साक्षर ",
    unknown: "थाहा नभएको ",
  },
  food_crops: {
    chaite_paddy: "चैते धान",
    barse_paddy: "बर्षे धान",
    corn: "मकै",
    wheat: "गहुँ",
    millet: "कोदो",
    barley: "जौ",
    phapar: "फापर",
    junelo: "जुनेलो",
    kaguno: "कागुनो",
    other: "अन्य खद्यान्नबाली",
    none: "कुनै अन्नबाली उत्पदान गर्दिन",
  },
  fruits: {
    mango: "आँप",
    jackfruit: "रुखकटहर",
    litchi: "लिची",
    banana: "केरा",
    lemon: "कागती",
    orange: "सुन्तला",
    nibuwa: "निबुवा",
    sweet_orange: "जुनार",
    sweet_lemon: "मौसम",
    jyamir: "ज्यामिर",
    pomelo: "भोगटे",
    pineapple: "भूईकटहर",
    papaya: "मेवा",
    avocado: "एभोकाडो",
    kiwi: "किवी",
    guava: "अम्बा",
    plum: "आरुबखडा",
    peach: "आरु",
    pear: "नासपाती",
    pomegranate: "अनार",
    walnut: "ओखर",
    japanese_persimmon: "हलुवावेद",
    hog_plum: "लप्सी",
    none: "कुनै फलफूलबाली उत्पदान गर्दिन",
  },
  genders: { male: "पुरुष ", female: "महिला ", other: "अन्य" },
  governmental_bodies: {
    household_and_microindustries: "घरेलु तथा साना उद्योग कार्यालय",
    commerce_office: "वाणिज्य कार्यालय",
    ministry_of_health_department: "स्वास्थ्य मन्त्रालय/विभाग",
    ward_office: "वडा कार्यालय",
    office_of_the_company_registrar: "कम्पनी रजिष्ट्रारको कार्यालय",
    municipality: "पालिकामा",
    cooperative_department_office: "सहकारी विभाग/कार्यालय",
    industrial_department: "उद्योग विभाग",
    ministry_of_education_department_office: "शिक्षा मन्त्रालय/ विभाग/कार्यालय",
    other: "अन्य (खुलाउने)",
  },
  land_area_unit: { "1": "विघा/कठ्ठा/धुर", "2": "रोपनी/आना/पैसा" },
  local_levels: {
    "1": "षडानन्द",
    "2": "भोजपुर",
    "3": "हतुवागढी",
    "4": "रामप्रसाद राई",
    "5": "आमचोक",
    "6": "टेम्केमैयुङ",
    "7": "अरुण",
    "8": "पौवादुङमा",
    "9": "साल्पासिलिछो",
    "10": "धनकुटा",
    "11": "पाख्रिबास",
    "12": "महालक्ष्मी",
    "13": "साँगुरीगढी",
    "14": "चौविसे",
    "15": "सहिदभूमि",
    "16": "छथर जोरपाटी",
    "17": "सूर्योदय",
    "18": "ईलाम",
    "19": "देउमाई",
    "20": "माईजोगमाई",
    "21": "फाकफोकथुम",
    "22": "माई",
    "23": "चुलाचुली",
    "24": "रोङ",
    "25": "माङसेबुङ",
    "26": "सन्दकपुर",
    "27": "मेचीनगर",
    "28": "विर्तामोड",
    "29": "दमक",
    "30": "भद्रपुर",
    "31": "शिवशताक्षी",
    "32": "अर्जुनधारा",
    "33": "गौरादह",
    "34": "कन्काई",
    "35": "कमल",
    "36": "पोखरा",
    "37": "कचनकवल",
    "38": "मोरंग",
    "39": "बाह्रदशी",
    "40": "गौरीगंज",
    "41": "हल्दिवारी",
    "42": "दिक्तेल रुपाकोट मझुवागढी",
    "43": "हलेसी तुवाचुङ",
    "44": "खोटेहाङ",
    "45": "दिप्रुङ चुइचुम्मा",
    "46": "ऐसेलुखर्क",
    "47": "जन्तेढुंगा",
    "48": "केपिलासगढी",
    "49": "वराहपोखरी",
    "50": "रावा बेसी",
    "51": "साकेला",
    "52": "सुन्दरहरैचा",
    "53": "बेलवारी",
    "54": "पथरी शनिश्चरे",
    "55": "रतुवामाई",
    "56": "उर्लावारी",
    "57": "रंगेली",
    "58": "सुनवर्षि",
    "59": "लेटाङ",
    "60": "विराटनगर",
    "61": "जहदा",
    "62": "बुढीगंगा",
    "63": "कटहरी",
    "64": "धनपालथान",
    "65": "कानेपोखरी",
    "66": "ग्रामथान",
    "67": "केरावारी",
    "68": "मिक्लाजुङ",
    "69": "सिद्दिचरण",
    "70": "खिजिदेम्बा",
    "71": "चिशंखुगढी",
    "72": "मोलुङ",
    "73": "सुनगण्डकी",
    "74": "चम्पादेवी",
    "75": "मानेभञ्याङ",
    "76": "लिखु",
    "77": "फिदिम",
    "78": "मिक्लाजुङ",
    "79": "फाल्गुनन्द",
    "80": "हिलिहाङ",
    "81": "फालेलुङ",
    "82": "याङवरक",
    "83": "कुम्मायक",
    "84": "तुम्बेवा",
    "85": "खाँदवारी",
    "86": "चैनपुर",
    "87": "धर्मदेवी",
    "88": "पाँचखपन",
    "89": "मादी",
    "90": "मकालु",
    "91": "सिलीचोङ",
    "92": "सभापोखरी",
    "93": "चिचिला",
    "94": "भोटखोला",
    "95": "सोलुदुधकुण्ड",
    "96": "माप्य दुधगण्डकी",
    "97": "नेचासल्यान",
    "98": "थुलुङ दुधगण्डकी",
    "99": "माहाकुलुङ",
    "100": "सोताङ",
    "101": "खुम्वु पासाङल्हमु",
    "102": "पोखरा",
    "103": "बराहक्षेत्र",
    "104": "ईनरुवा",
    "105": "दुहवी",
    "106": "रामधुनी",
    "107": "ईटहरी",
    "108": "धरान",
    "109": "गण्डकी",
    "110": "हरिनगर",
    "111": "भोक्राहा नरसिंह",
    "112": "देवानगञ्ज",
    "113": "गढी",
    "114": "बर्जु",
    "115": "फुङलिङ",
    "116": "सिरीजङ्घा",
    "117": "आठराई त्रिवेणी",
    "118": "पाथीभरा याङवरक",
    "119": "मेरिङदेन",
    "120": "सिदिङ्वा",
    "121": "फक्ताङलुङ",
    "122": "मैवाखोला",
    "123": "मिक्वाखोला",
    "124": "म्याङलुङ",
    "125": "लालीगुराँस",
    "126": "आठराई",
    "127": "फेदाप",
    "128": "छथर",
    "129": "मेन्छयायेम",
    "130": "त्रियुगा",
    "131": "कटारी",
    "132": "चौदण्डीगढी",
    "133": "वेलका",
    "134": "उदयपुरगढी",
    "135": "रौतामाई",
    "136": "ताप्ली",
    "137": "लिम्चुङ्बुङ",
    "138": "बिरगंज",
    "139": "बहुदरमाई",
    "140": "पर्सागढी",
    "141": "पोखरिया",
    "142": "बिन्दबासिनी",
    "143": "धोबीनी",
    "144": "छिपहरमाई",
    "145": "जगरनाथपुर",
    "146": "जिरा भवानी",
    "147": "कालिकामाई",
    "148": "पकाहा मैनपुर",
    "149": "पटेर्वा सुगौली",
    "150": "सखुवा प्रसौनी",
    "151": "ठोरी",
    "152": "कलैया",
    "153": "जीतपुर सिमरा",
    "154": "कोल्हवी",
    "155": "निजगढ",
    "156": "महागढीमाई",
    "157": "सिम्रौनगढ",
    "158": "पचरौता",
    "159": "फेटा",
    "160": "विश्रामपुर",
    "161": "प्रसौनी",
    "162": "आदर्श कोटवाल",
    "163": "करैयामाई",
    "164": "देवताल",
    "165": "परवानीपुर",
    "166": "बारागढी",
    "167": "सुवर्ण",
    "168": "बौधीमाई",
    "169": "बृन्दावन",
    "170": "चन्द्रपुर",
    "171": "देवाही गोनाही",
    "172": "गढीमाई",
    "173": "गरुडा",
    "174": "गौर",
    "175": "गुजरा",
    "176": "ईशनाथ",
    "177": "कटहरिया",
    "178": "माधव नारायण",
    "179": "मौलापुर",
    "180": "परोहा",
    "181": "फतुवाबिजयपुर",
    "182": "राजदेवी",
    "183": "राजपुर",
    "184": "दुर्गा भगवती",
    "185": "यमुनामाई",
    "186": "बागमती",
    "187": "बलरा",
    "188": "बरहथवा",
    "189": "गोडैटा",
    "190": "हरिवन",
    "191": "हरिपुर",
    "192": "हरिपुर्वा",
    "193": "ईश्वरपुर",
    "194": "कविलासी",
    "195": "लालबन्दी",
    "196": "मलंगवा",
    "197": "बसबरीया",
    "198": "विष्णु",
    "199": "ब्रह्मपुरी",
    "200": "चक्रघट्टा",
    "201": "चन्द्रनगर",
    "202": "धनकौल",
    "203": "कौडेना",
    "204": "पर्सा",
    "205": "रामनगर",
    "206": "लहान",
    "207": "धनगढीमाई",
    "208": "सिरहा",
    "209": "गोलबजार",
    "210": "मिर्चैयाँ",
    "211": "कल्याणपुर",
    "212": "कर्जन्हा",
    "213": "सुखीपुर",
    "214": "भगवानपुर",
    "215": "औरही",
    "216": "विष्णुपुर",
    "217": "बरियारपट्टी",
    "218": "लक्ष्मीपुर पतारी",
    "219": "नरहा",
    "220": "सखुवानान्कारकट्टी",
    "221": "अर्नमा",
    "222": "नवराजपुर",
    "223": "जनकपुरधाम",
    "224": "क्षिरेश्वरनाथ",
    "225": "गणेशमान चारनाथ",
    "226": "धनुषाधाम",
    "227": "नगराइन",
    "228": "विदेह",
    "229": "मिथिला",
    "230": "शहीदनगर",
    "231": "सबैला",
    "232": "कमला",
    "233": "मिथिला बिहारी",
    "234": "हंसपुर",
    "235": "जनकनन्दिनी",
    "236": "बटेश्वर",
    "237": "मुखियापट्टी मुसहरमिया",
    "238": "लक्ष्मीनिया",
    "239": "औरही",
    "240": "धनौजी",
    "241": "बोदेबरसाईन",
    "242": "डाक्नेश्वरी",
    "243": "हनुमाननगर कङ्\u200cकालिनी",
    "244": "कञ्चनरुप",
    "245": "खडक",
    "246": "शम्भुनाथ",
    "247": "सप्तगण्डकी",
    "248": "सुरुङ्\u200dगा",
    "249": "राजविराज",
    "250": "अग्निसाइर कृष्णासरवन",
    "251": "बलान-बिहुल",
    "252": "राजगढ",
    "253": "बिष्णुपुर",
    "254": "छिन्नमस्ता",
    "255": "महादेवा",
    "256": "रुपनी",
    "257": "तिलाठी कोईलाडी",
    "258": "तिरहुत",
    "259": "औरही",
    "260": "बलवा",
    "261": "बर्दिबास",
    "262": "भँगाहा",
    "263": "गौशाला",
    "264": "जलेश्वर",
    "265": "लोहरपट्टी",
    "266": "मनरा शिसवा",
    "267": "मटिहानी",
    "268": "रामगोपालपुर",
    "269": "एकडारा",
    "270": "महोत्तरी",
    "271": "पिपरा",
    "272": "साम्सी",
    "273": "सोनमा",
    "274": "भक्तपुर",
    "275": "चाँगुनारायण",
    "276": "सूर्यविनायक",
    "277": "मध्यपुर थिमी",
    "278": "भरतपुर",
    "279": "कालिका",
    "280": "खैरहनी",
    "281": "माडी",
    "282": "रत्ननगर",
    "283": "राप्ती",
    "284": "इच्छाकामना",
    "285": "धुनीबेंशी",
    "286": "निलकण्ठ",
    "287": "खनियाबास",
    "288": "गजुरी",
    "289": "गल्छी",
    "290": "गङ्गाजमुना",
    "291": "ज्वालामूखी",
    "292": "थाक्रे",
    "293": "नेत्रावती डबजोङ",
    "294": "बेनीघाट रोराङ्ग",
    "295": "रुवी भ्याली",
    "296": "सिद्धलेक",
    "297": "त्रिपुरासुन्दरी",
    "298": "भिमेश्वर",
    "299": "जिरी",
    "300": "कालिन्चोक",
    "301": "मेलुङ्ग",
    "302": "विगु",
    "303": "गौरीशङ्कर",
    "304": "वैतेश्वर",
    "305": "शैलुङ्ग",
    "306": "तामागण्डकी",
    "307": "काठमाण्डौं",
    "308": "गोकर्णेश्वर",
    "309": "कीर्तिपुर",
    "310": "कागेश्वरी मनोहरा",
    "311": "चन्द्रागिरी",
    "312": "टोखा",
    "313": "तारकेश्वर",
    "314": "दक्षिणकाली",
    "315": "नागार्जुन",
    "316": "बुढानिलकण्ठ",
    "317": "शङ्खरापुर",
    "318": "धुलिखेल",
    "319": "नमोबुद्ध",
    "320": "पनौती",
    "321": "पाँचखाल",
    "322": "बनेपा",
    "323": "मण्डनदेउपुर",
    "324": "खानीखोला",
    "325": "चौंरीदेउराली",
    "326": "तेमाल",
    "327": "बेथानचोक",
    "328": "भुम्लु",
    "329": "महाभारत",
    "330": "रोशी",
    "331": "ललितपुर",
    "332": "महालक्ष्मी",
    "333": "गोदावरी",
    "334": "कोन्ज्योसोम",
    "335": "बागमती",
    "336": "महाङ्काल",
    "337": "हेटौडा",
    "338": "थाहा",
    "339": "भिमफेदी",
    "340": "मकवानपुरगढी",
    "341": "मनहरी",
    "342": "राक्सिराङ्ग",
    "343": "बकैया",
    "344": "बाग्मति",
    "345": "कैलाश",
    "346": "इन्द्रसरोबर",
    "347": "विदुर",
    "348": "बेलकोटगढी",
    "349": "ककनी",
    "350": "पञ्चकन्या",
    "351": "लिखु",
    "352": "दुप्चेश्वर",
    "353": "शिवपुरी",
    "354": "तादी",
    "355": "सुर्यगढी",
    "356": "तारकेश्वर",
    "357": "किस्पाङ",
    "358": "म्यगङ",
    "359": "मन्थली",
    "360": "रामेछाप",
    "361": "उमाकुण्ड",
    "362": "खाँडादेवी",
    "363": "दोरम्बा",
    "364": "गोकुलगङ्गा",
    "365": "लिखु तामागण्डकी",
    "366": "सुनापती",
    "367": "कालिका",
    "368": "गोसाईकुण्ड",
    "369": "नौकुण्ड",
    "370": "आमाछोदिङमो",
    "371": "उत्तरगया",
    "372": "कमलामाई",
    "373": "दुधौली",
    "374": "सुनगण्डकी",
    "375": "हरिहरपुरगढी",
    "376": "तीनपाटन",
    "377": "मरिण",
    "378": "गोलन्जर",
    "379": "फिक्कल",
    "380": "घ्याङलेख",
    "381": "चौतारा साँगाचोकगढी",
    "382": "बाह्रविसे",
    "383": "मेलम्ची",
    "384": "बलेफी",
    "385": "सुनगण्डकी",
    "386": "ईन्द्रावती",
    "387": "जुगल",
    "388": "पाँचपोखरी थाङपाल",
    "389": "भोटेगण्डकी",
    "390": "लिसङ्खु पाखर",
    "391": "हेलम्बु",
    "392": "त्रिपुरासुन्दरी",
    "393": "बागलुङ",
    "394": "ढोरपाटन",
    "395": "गल्कोट",
    "396": "जैमूनी",
    "397": "वरेङ",
    "398": "काठेखोला",
    "399": "तमानखोला",
    "400": "ताराखोला",
    "401": "निसीखोला",
    "402": "वडिगाड",
    "403": "गोरखा",
    "404": "पालुङटार",
    "405": "बारपाक सुलिकोट",
    "406": "सिरानचोक",
    "407": "अजिरकोट",
    "408": "चुमनुव्री",
    "409": "धार्चे",
    "410": "भिमसेनथापा",
    "411": "शहिद लखन",
    "412": "आरूघाट",
    "413": "गण्डकी",
    "414": "पोखरा",
    "415": "अन्नपूर्ण",
    "416": "माछापुच्छ्रे",
    "417": "मादी",
    "418": "रूपा",
    "419": "बेसीशहर",
    "420": "मध्यनेपाल",
    "421": "रारइनास",
    "422": "सुन्दरबजार",
    "423": "दोर्दी",
    "424": "दूधपोखरी",
    "425": "क्व्होलासोथार",
    "426": "मर्स्याङदी",
    "427": "चामे",
    "428": "नासोँ",
    "429": "नार्पा भूमि",
    "430": "मनाङ ङिस्याङ",
    "431": "घरपझोङ",
    "432": "थासाङ",
    "433": "वारागुङ मुक्तिक्षेत्र",
    "434": "लोमन्थाङ",
    "435": "लो-घेकर दामोदरकुण्ड",
    "436": "बेनी",
    "437": "अन्नपुर्ण",
    "438": "धवलागिरी",
    "439": "मंगला",
    "440": "मालिका",
    "441": "रघुगंगा",
    "442": "कावासोती",
    "443": "गैडाकोट",
    "444": "देवचुली",
    "445": "मध्यविन्दु",
    "446": "बौदीकाली",
    "447": "बुलिङटार",
    "448": "विनयी त्रिवेणी",
    "449": "हुप्सेकोट",
    "450": "कुश्मा",
    "451": "फलेवास",
    "452": "जलजला",
    "453": "पैयूं",
    "454": "महाशिला",
    "455": "मोदी",
    "456": "विहादी",
    "457": "गल्याङ",
    "458": "चापाकोट",
    "459": "पुतलीबजार",
    "460": "भीरकोट",
    "461": "वालिङ",
    "462": "अर्जुनचौपारी",
    "463": "आँधिखोला",
    "464": "कालीगण्डकी",
    "465": "फेदीखोला",
    "466": "हरिनास",
    "467": "बिरुवा",
    "468": "भानु",
    "469": "भिमाद",
    "470": "व्यास",
    "471": "शुक्लागण्डकी",
    "472": "आँबुखैरेनी",
    "473": "देवघाट",
    "474": "वन्दिपुर",
    "475": "ऋषिङ्ग",
    "476": "घिरिङ",
    "477": "म्याग्दे",
    "478": "कपिलवस्तु",
    "479": "बाणगंगा",
    "480": "बुद्धभुमी",
    "481": "शिवराज",
    "482": "कृष्णनगर",
    "483": "महाराजगंज",
    "484": "मायादेवी",
    "485": "यसोधरा",
    "486": "सुद्धोधन",
    "487": "विजयनगर",
    "488": "बर्दघाट",
    "489": "रामग्राम",
    "490": "सुनवल",
    "491": "सुस्ता",
    "492": "पाल्हीनन्दन",
    "493": "प्रतापपुर",
    "494": "सरावल",
    "495": "बुटवल",
    "496": "देवदह",
    "497": "गण्डकी सांस्कृतिक",
    "498": "सैनामैना",
    "499": "सिद्धार्थनगर",
    "500": "तिलोत्तमा",
    "501": "गैडहवा",
    "502": "कन्चन",
    "503": "कोटहीमाई",
    "504": "मर्चवारी",
    "505": "मायादेवी",
    "506": "ओमसतिया",
    "507": "रोहिणी",
    "508": "सम्मरीमाई",
    "509": "सियारी",
    "510": "शुद्धोधन",
    "511": "सन्धिखर्क",
    "512": "शितगंगा",
    "513": "भूमिकास्थान",
    "514": "छत्रदेव",
    "515": "पाणिनी",
    "516": "मालारानी",
    "517": "रेसुङ्गा",
    "518": "मुसिकोट",
    "519": "रुरुक्षेत्र",
    "520": "छत्रकोट",
    "521": "गुल्मी दरबार",
    "522": "चन्द्रकोट",
    "523": "सत्यवती",
    "524": "धुर्कोट",
    "525": "कालीगण्डकी",
    "526": "ईस्मा",
    "527": "मालिका",
    "528": "मदाने",
    "529": "तानसेन",
    "530": "रामपुर",
    "531": "रैनादेवी छहरा",
    "532": "रिब्दिकोट",
    "533": "बगनासकाली",
    "534": "रम्भा",
    "535": "पूर्वखोला",
    "536": "निस्दी",
    "537": "माथागढी",
    "538": "तिनाउ",
    "539": "घोराही",
    "540": "तुल्सीपुर",
    "541": "लमही",
    "542": "पोखरा",
    "543": "राजपुर",
    "544": "शान्तिनगर",
    "545": "राप्ती",
    "546": "बंगलाचुली",
    "547": "दंगीशरण",
    "548": "बबई",
    "549": "स्वर्गद्वारी",
    "550": "प्यूठान",
    "551": "माण्डवी",
    "552": "सरुमारानी",
    "553": "ऐरावती",
    "554": "मल्लरानी",
    "555": "झिमरुक",
    "556": "नौवहिनी",
    "557": "गौमुखी",
    "558": "मोरंग",
    "559": "रुन्टीगढी",
    "560": "त्रिवेणी",
    "561": "सुनिल स्मृति",
    "562": "पोखरा",
    "563": "सुनछहरी",
    "564": "थवाङ",
    "565": "माडी",
    "566": "गंगादेव",
    "567": "परिवर्तन",
    "568": "पुथा उत्तरगंगा",
    "569": "भूमे",
    "570": "सिस्ने",
    "571": "नेपालगंज",
    "572": "कोहलपुर",
    "573": "राप्ती सोनारी",
    "574": "नरैनापुर",
    "575": "डुडुवा",
    "576": "जानकी",
    "577": "पोखरा",
    "578": "बैजनाथ",
    "579": "गुलरिया",
    "580": "राजापुर",
    "581": "मधुवन",
    "582": "ठाकुरबाबा",
    "583": "बाँसगढी",
    "584": "बारबर्दिया",
    "585": "बढैयाताल",
    "586": "गेरुवा",
    "587": "आठबिसकोट",
    "588": "मुसिकोट",
    "589": "चौरजहारी",
    "590": "सानी भेरी",
    "591": "त्रिवेणी",
    "592": "बाँफिकोट",
    "593": "कुमाख",
    "594": "कालिमाटी",
    "595": "छत्रेश्वरी",
    "596": "दार्मा",
    "597": "कपुरकोट",
    "598": "त्रिवेणी",
    "599": "सिद्ध कुमाख",
    "600": "बागचौर",
    "601": "शारदा",
    "602": "बनगाड कुपिण्डे",
    "603": "मुड्केचुला",
    "604": "काईके",
    "605": "शे फोक्सुन्डो",
    "606": "जगदुल्ला",
    "607": "डोल्पो बुद्ध",
    "608": "छार्का ताङसोङ",
    "609": "ठूली भेरी",
    "610": "त्रिपुरासुन्दरी",
    "611": "सिमकोट",
    "612": "सर्केगाड",
    "613": "अदानचुली",
    "614": "खार्पुनाथ",
    "615": "ताँजाकोट",
    "616": "चंखेली",
    "617": "नाम्खा",
    "618": "तातोपानी",
    "619": "पातारासी",
    "620": "तिला",
    "621": "कनकासुन्दरी",
    "622": "सिंजा",
    "623": "हिमा",
    "624": "गुठिचौर",
    "625": "चन्दननाथ",
    "626": "खाँडाचक्र",
    "627": "रास्कोट",
    "628": "तिलागुफा",
    "629": "नरहरिनाथ",
    "630": "पलाता",
    "631": "शुभ कालीका",
    "632": "सान्नी त्रिवेणी",
    "633": "पचालझरना",
    "634": "महावै",
    "635": "खत्याड",
    "636": "सोरु",
    "637": "मुगुम कार्मारोंग",
    "638": "छायाँनाथ रारा",
    "639": "सिम्ता",
    "640": "बराहताल",
    "641": "चौकुने",
    "642": "चिङ्गाड",
    "643": "गुर्भाकोट",
    "644": "बीरेन्द्रनगर",
    "645": "भेरीगंगा",
    "646": "पञ्चपुरी",
    "647": "लेकवेशी",
    "648": "दुल्लु",
    "649": "गुराँस",
    "650": "भैरवी",
    "651": "नौमुले",
    "652": "महावु",
    "653": "ठाँटीकाँध",
    "654": "भगवतीमाई",
    "655": "डुंगेश्वर",
    "656": "आठबीस",
    "657": "नारायण",
    "658": "चामुण्डा विन्द्रासैनी",
    "659": "छेडागाड",
    "660": "भेरी",
    "661": "नलगाड",
    "662": "जुनीचाँदे",
    "663": "कुसे",
    "664": "बारेकोट",
    "665": "शिवालय",
    "666": "महाकाली",
    "667": "शैल्यशिखर",
    "668": "नौगाड",
    "669": "मालिकार्जुन",
    "670": "मार्मा",
    "671": "लेकम",
    "672": "दुहुँ",
    "673": "ब्याँस",
    "674": "अपिहिमाल",
    "675": "जयपृथ्वी",
    "676": "बुंगल",
    "677": "केदारस्युँ",
    "678": "थलारा",
    "679": "वित्थडचिर",
    "680": "छबिसपाथिभेरा",
    "681": "खप्तडछान्ना",
    "682": "मष्टा",
    "683": "दुर्गाथली",
    "684": "तलकोट",
    "685": "सूर्मा",
    "686": "साइपाल",
    "687": "बडीमालिका",
    "688": "त्रिवेणी",
    "689": "बुढीगंगा",
    "690": "बुढीनन्दा",
    "691": "खप्तड छेडेदह",
    "692": "स्वामीकार्तिक खापर",
    "693": "जगन्\u200dनाथ",
    "694": "हिमाली",
    "695": "गौमुल",
    "696": "दशरथचन्द",
    "697": "पाटन",
    "698": "मेलौली",
    "699": "पुर्चौडी",
    "700": "दोगडाकेदार",
    "701": "डीलासैनी",
    "702": "सिगास",
    "703": "पञ्चेश्वर",
    "704": "सुर्नया",
    "705": "शिवनाथ",
    "706": "दिपायल सिलगढी",
    "707": "शिखर",
    "708": "आदर्श",
    "709": "पूर्वीचौकी",
    "710": "के.आई.सिं.",
    "711": "जोरायल",
    "712": "सायल",
    "713": "बोगटान फुड्सिल",
    "714": "बडीकेदार",
    "715": "रामारोशन",
    "716": "चौरपाटी",
    "717": "तुर्माखाँद",
    "718": "मेल्लेख",
    "719": "ढकारी",
    "720": "बान्निगढी जयगढ",
    "721": "मंगलसेन",
    "722": "कमलबजार",
    "723": "साँफेबगर",
    "724": "पन्चदेवल विनायक",
    "725": "नवदुर्गा",
    "726": "आलिताल",
    "727": "गन्यापधुरा",
    "728": "भागेश्वर",
    "729": "अजयमेरु",
    "730": "अमरगढी",
    "731": "परशुराम",
    "732": "भीमदत्त",
    "733": "पुर्नवास",
    "734": "वेदकोट",
    "735": "माहाकाली",
    "736": "शुक्लाफाँटा",
    "737": "बेलौरी",
    "738": "कृष्णपुर",
    "739": "लालझाडी",
    "740": "बेलडाडी",
    "741": "जानकी",
    "742": "कैलारी",
    "743": "जोशीपुर",
    "744": "बर्दगोरिया",
    "745": "मोहन्याल",
    "746": "चुरे",
    "747": "टिकापुर",
    "748": "घोडाघोडी",
    "749": "लम्कीचुहा",
    "750": "भजनी",
    "751": "गोदावरी",
    "752": "गौरीगंगा",
    "753": "धनगढी",
  },
  mass_unit: { "1": "टन/क्विन्टल/किलो", "2": "मुरी/पाथी" },
  oil_seeds: {
    mustard: "तोरी/सरसोँ",
    flax: "आलस",
    sunflower: "सूर्यमूखी",
    other: "अन्य तेलबाली (जैतुन, रायो, ...)",
    none: "कुनै तेलबाली उत्पदान गर्दिन",
  },
  provinces: {
    "1": "प्रदेश नं. १",
    "2": "परदेश नं. २",
    "3": "बागमती प्रदेश",
    "4": "गण्डकी प्रदेश",
    "5": "गण्डकी प्रदेश",
    "6": "कर्णाली प्रदेश",
    "7": "सुदुर पश्चिम प्रदेश",
  },
  pulses: {
    pigeon_pea: "रहर",
    black_gram: "मास",
    lentil: "मसुरो",
    chickpea: "चना",
    soyabean: "भटमास",
    snake_bean: "बोडी",
    bean: "सिमी",
    horse_gram: "गहत",
    pea: "केराउ",
    other: "अन्य दालबाली (मस्याङ्, खेसरी,....)",
    none: "कुनै दालबाली उत्पदान गर्दिन",
  },
  room_types: {
    air_conditioner: "एयर कन्डिसनर (A/C) सहित शौचालय तथा स्नानघर भएको कोठा",
    attached_bathroom_and_toilet: "शौचालय तथा स्थानघर भएको कोठा",
    normal_room: "साधारण कोठा",
  },
  spice_crops: {
    garlic: "लसुन",
    turmeric: "बेसार",
    chili_pepper: "खुर्सानी",
    ginger: "अदुवा",
    coriander: "धनिया",
    sichuan_pepper: "टिमुर",
    black_pepper: "मरिच",
    cinnamomum_tamala: "तेजपात",
    cumin: "जीरा",
    fenugreek: "मेथी",
    other: "अन्य मसलाबाली",
    none: "कुनै मसलाबाली उत्पदान गर्दिन",
  },
  statutory_status: {
    individual: "व्यक्तिगत",
    cooperative: "सहकारी",
    partnership: "साझेदारी",
    private_limited: "प्राइभेट लिमिटेड",
    public_limited: "पब्लिक लिमिटेड",
    other: "अन्य (खुलाउने)",
  },
  true_false: { yes: "छ", no: "छैन" },
  vegetables: {
    potato: "आलु",
    cauliflower: "काउली",
    cabbage: "बन्दा",
    tomato: "गोलभेडा / टमाटर",
    radish: "मुला",
    carrot: "गाँजर",
    turnip: "सलगम",
    capsicum: "भेडे खुर्सानी",
    okra: "भिण्डी /रामतोरिया",
    brinjal: "भण्टा/भ्यान्टा",
    onion: "प्याज",
    string_bean: "घिउ सिमी",
    red_kidney_bean: "राज्मा सिमी",
    cucumber: "काक्रो",
    pumpkin: "फर्सी",
    bitter_gourd: "करेला",
    luffa: "घिरौला",
    snake_gourd: "चिचिन्ना",
    calabash: "लौका",
    balsam_apple: "बरेला",
    mushroom: "च्याउ",
    squice: "स्कुस",
    mustard_greens: "रायोको साग",
    garden_cress: "चम्सुरको साग",
    spinach: "पालुङ्गो साग",
    colocasia: "पिडालु",
    yam: "तरुल",
    other: "अन्य तरकारी बाली",
    none: "कुनै तरकारी बाली उत्पदान गर्दिन",
  },
  volume_unit: { "1": "लिटर", "2": "मुरी/पाथी" },
};
