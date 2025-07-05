import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BCGVaccineInfo() {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {/* Main Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          <span className="english-font">BCG</span> खोप (बिसिजी खोप) - विस्तृत जानकारी
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="english-font font-medium">BCG (Bacille Calmette-Guérin)</span> खोप नवजात शिशुहरूलाई दिइने सबैभन्दा महत्वपूर्ण खोपहरू मध्ये एक हो। 
          यो खोप क्षयरोग (ट्युबरकुलोसिस) नामक गम्भीर संक्रामक रोगबाट बच्चाहरूलाई सुरक्षा प्रदान गर्छ र जन्मपछि ४८ घण्टाभित्र दिइन्छ।
        </p>
      </div>

      {/* Introduction and Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">BCG</span> खोपको परिचय र इतिहास
        </h2>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="english-font font-medium">BCG (Bacille Calmette-Guérin)</span> खोप फ्रान्सेली वैज्ञानिकहरू 
            अल्बर्ट कालमेट र कामिल गुएरिनद्वारा सन् १९२१ मा विकसित गरिएको थियो। यो खोप जीवित तर कमजोर पारिएको 
            <span className="english-font font-medium"> Mycobacterium bovis</span> बेक्टेरियाबाट बनाइएको छ, जुन गाईवस्तुको क्षयरोगको कारक हो 
            तर मानिसमा सुरक्षित रूपमा प्रयोग गर्न सकिन्छ।
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            यो खोप विश्वभर १०० वर्षभन्दा बढी समयदेखि प्रयोग भइरहेको छ र अरबौं मानिसहरूले लगाइसकेका छन्। 
            नेपालमा यो खोप १९७९ सालदेखि राष्ट्रिय खोप कार्यक्रमको महत्वपूर्ण भाग बनेको छ र सबै सरकारी स्वास्थ्य संस्थानहरूमा 
            निःशुल्क उपलब्ध छ। यो खोप बाँयो हातको माथिल्लो भागमा छालामुनि दिइन्छ र जीवनभर सुरक्षा प्रदान गर्छ।
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            <span className="english-font">BCG</span> खोपको सबैभन्दा महत्वपूर्ण विशेषता यो हो कि यसले बच्चाहरूमा क्षयरोगका गम्भीर र जीवनलाई 
            खतरा पुर्याउने रूपहरू जस्तै दिमागको झिल्लीको क्षयरोग र मिलियरी क्षयरोगबाट उच्च स्तरको सुरक्षा प्रदान गर्छ। 
            यी रोगहरूको मृत्युदर अत्यन्त उच्च छ र खोप नलगाएका बच्चाहरूमा यस्ता गम्भीर अवस्थाहरू देखा पर्न सक्छन्।
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">खोपको प्राविधिक विवरण</h3>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-blue-900 mb-3">मुख्य विशेषताहरू:</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• जीवित तर कमजोर पारिएको <span className="english-font">Mycobacterium bovis</span> बेक्टेरिया</li>
                <li>• एक पटक मात्र दिइने, जीवनभर प्रभावकारी</li>
                <li>• <span className="english-font">0.05 ml</span> मात्रामा छालामुनि इन्जेक्सन</li>
                <li>• कुनै बुस्टर डोजको आवश्यकता नपर्ने</li>
                <li>• -२°C देखि ८°C तापक्रममा भण्डारण गरिने</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-3">दिने तरिका:</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• बाँयो हातको माथिल्लो भाग (डेल्टोइड मांसपेशी)</li>
                <li>• छालामुनि (<span className="english-font">Intradermal</span>) विधिबाट</li>
                <li>• सुई ४५ डिग्री कोणमा छिराएर</li>
                <li>• सानो फोकाको आकारमा सुन्निने देखिनुपर्छ</li>
                <li>• कुनै मसाज वा दबाब नदिने</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Against Diseases */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">BCG</span> खोपले कुन रोगहरूबाट सुरक्षा दिन्छ?
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">BCG</span> खोपले मुख्यतः क्षयरोगका विभिन्न रूपहरूबाट सुरक्षा प्रदान गर्छ। यसको प्रभावकारिता 
          रोगको प्रकार अनुसार फरक हुन्छ, तर सबैभन्दा गम्भीर र जीवनलाई खतरा पुर्याउने रूपहरूविरुद्ध यसको सुरक्षा दर उच्च छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">दिमागको झिल्लीको क्षयरोग (<span className="english-font">TB Meningitis</span>)</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो क्षयरोगको सबैभन्दा गम्भीर रूप हो जसमा दिमागको झिल्लीमा संक्रमण हुन्छ। <span className="english-font">BCG</span> खोपले 
          यस रोगविरुद्ध <strong>८०-९०%</strong> सुरक्षा प्रदान गर्छ। यो रोग विशेषगरी ५ वर्षमुनिका बच्चाहरूमा देखिन्छ र 
          उपचार नगरेमा मृत्युदर ५०-७०% सम्म पुग्छ। बाँचेका बच्चाहरूमा पनि स्थायी मानसिक अपाङ्गता, सुन्ने र देख्ने शक्तिमा समस्या हुन सक्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">मिलियरी क्षयरोग (<span className="english-font">Miliary TB</span>)</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो क्षयरोग शरीरका सबै अंगहरूमा एकसाथ फैलिने रूप हो। <span className="english-font">BCG</span> खोपले यसविरुद्ध 
          <strong>७०-८०%</strong> सुरक्षा दिन्छ। यो रोगमा फोक्सो, कलेजो, प्लीहा, मिर्गौला र अन्य अंगहरूमा संक्रमण हुन्छ। 
          उपचार नगरेमा यसको मृत्युदर १००% छ र समयमा उपचार गरेमा पनि ५०% सम्म मृत्युदर हुन्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">फोक्सोको क्षयरोग (<span className="english-font">Pulmonary TB</span>)</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो क्षयरोगको सबैभन्दा सामान्य रूप हो जसमा फोक्सोमा संक्रमण हुन्छ। <span className="english-font">BCG</span> खोपले 
          बच्चाहरूमा यसविरुद्ध <strong>५०-६०%</strong> सुरक्षा प्रदान गर्छ। वयस्कहरूमा फोक्सोको क्षयरोगविरुद्ध 
          <span className="english-font">BCG</span> को प्रभावकारिता कम छ, तर बच्चाहरूमा महत्वपूर्ण सुरक्षा मिल्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">हड्डी र जोर्नीको क्षयरोग (<span className="english-font">Bone & Joint TB</span>)</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          यो क्षयरोग हड्डी र जोर्नीहरूमा हुन्छ र विकलाङ्गता निम्त्याउन सक्छ। <span className="english-font">BCG</span> खोपले 
          यसविरुद्ध पनि महत्वपूर्ण सुरक्षा प्रदान गर्छ र बच्चाहरूमा यस्ता समस्याहरूको जोखिम उल्लेखनीय कम गर्छ।
        </p>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-3">सुरक्षा प्रभावकारिताको सारांश:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-white rounded">
              <div className="text-2xl font-bold text-green-700">८०-९०%</div>
              <div className="text-gray-600">दिमागको झिल्लीको क्षयरोग</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-2xl font-bold text-green-700">७०-८०%</div>
              <div className="text-gray-600">मिलियरी क्षयरोग</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-2xl font-bold text-yellow-700">५०-६०%</div>
              <div className="text-gray-600">फोक्सोको क्षयरोग</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-2xl font-bold text-blue-700">जीवनभर</div>
              <div className="text-gray-600">सुरक्षा अवधि</div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance and Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">BCG</span> खोपको महत्व र फाइदाहरू
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">BCG</span> खोप विशेषगरी विकासशील देशहरूमा अत्यन्त महत्वपूर्ण छ, जहाँ क्षयरोगको प्रकोप उच्च छ। 
          नेपाल विश्वव्यापी रूपमा क्षयरोगको उच्च बोझ भएका २२ देशहरू मध्ये एक हो र यहाँ क्षयरोग एक प्रमुख सार्वजनिक स्वास्थ्य समस्या छ। 
          यो खोपले बालबालिकाहरूलाई यस घातक रोगबाट बचाउने काम गर्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">बालबालिकाहरूमा प्रत्यक्ष फाइदाहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>गम्भीर क्षयरोगका रूपहरूबाट सुरक्षा:</strong> <span className="english-font">BCG</span> खोपको सबैभन्दा महत्वपूर्ण फाइदा 
          यो हो कि यसले दिमागको झिल्लीको क्षयरोग र मिलियरी क्षयरोग जस्ता जीवनलाई खतरा पुर्याउने रोगहरूबाट उच्च स्तरको सुरक्षा प्रदान गर्छ। 
          यी रोगहरू विशेषगरी ५ वर्षमुनिका बच्चाहरूमा देखिन्छन् र अत्यन्त घातक हुन्छन्।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>प्रतिरक्षा प्रणाली मजबुतीकरण:</strong> खोपले बच्चाको प्रतिरक्षा प्रणालीलाई क्षयरोगका विभिन्न रूपहरू चिन्न र 
          लड्न सिकाउँछ। यसले बच्चाको शरीरमा स्मृति कोशिकाहरू (Memory Cells) बनाउँछ जसले भविष्यमा क्षयरोगको संक्रमण भएमा 
          तुरुन्तै प्रतिक्रिया देखाउँछ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>मृत्युदरमा उल्लेखनीय कमी:</strong> अध्ययनहरूले देखाएको छ कि <span className="english-font">BCG</span> खोप लगाएका 
          बच्चाहरूमा क्षयरोगजन्य मृत्युदर ८०% सम्म कम हुन्छ। विशेषगरी गम्भीर रूपहरूमा मृत्युदर अझै बढी कम हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>स्वस्थ बृद्धि र विकास:</strong> क्षयरोगबाट बच्दा बच्चाको शारीरिक र मानसिक विकासमा कुनै बाधा पर्दैन। 
          बच्चाहरू सामान्य रूपमा बढ्न सक्छन् र राम्रो शिक्षा लिन सक्छन्।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">सामुदायिक र सामाजिक फाइदाहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>झुण्ड प्रतिरक्षा (<span className="english-font">Herd Immunity</span>):</strong> जब धेरै बच्चाहरूले 
          <span className="english-font">BCG</span> खोप लगाउँछन्, तब समुदायमा क्षयरोगको फैलावट कम हुन्छ। 
          यसले खोप नलगाएका मानिसहरूलाई पनि अप्रत्यक्ष सुरक्षा प्रदान गर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>आर्थिक बोझ कमी:</strong> खोपले परिवार र समुदायमा क्षयरोगको उपचारमा लाग्ने ठूलो खर्च बचत गराउँछ। 
          क्षयरोगको उपचार महंगो छ र लामो समयसम्म चल्छ, जसले पारिवारिक आर्थिक अवस्थामा गम्भीर प्रभाव पार्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>स्वास्थ्य सेवाको दबाब कमी:</strong> खोप कार्यक्रमले अस्पताल र स्वास्थ्य केन्द्रहरूमा क्षयरोगका बिरामीहरूको 
          संख्या घटाउँछ। यसले स्वास्थ्य सेवामा दबाब कम गर्छ र अन्य रोगीहरूको उपचारमा सुधार ल्याउँछ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">नेपालको सन्दर्भमा विशेष महत्व</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>उच्च क्षयरोग प्रभावित क्षेत्र:</strong> नेपालमा प्रति वर्ष लगभग ६९,००० नयाँ क्षयरोगका केसहरू पत्ता लाग्छन्। 
          यो संख्या विश्वव्यापी रूपमा उच्च मानिन्छ र यसैकारण यहाँ <span className="english-font">BCG</span> खोप अत्यन्त आवश्यक छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>कुपोषण र गरिबी:</strong> नेपालमा कुपोषण र गरिबीको समस्या छ, जसले मानिसहरूको प्रतिरक्षा प्रणाली कमजोर बनाउँछ। 
          कमजोर प्रतिरक्षा प्रणाली भएका व्यक्तिहरूमा क्षयरोगको जोखिम बढी हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>भीडभाडयुक्त बसोबास:</strong> सहरी क्षेत्रहरूमा भीडभाड र हावा प्रवाहको कमीले क्षयरोगको संक्रमण सजिलो बनाउँछ। 
          यस्तो वातावरणमा खोपले महत्वपूर्ण सुरक्षा प्रदान गर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>स्वास्थ्य सेवामा पहुँचको कमी:</strong> दुर्गम क्षेत्रहरूमा स्वास्थ्य सेवामा पहुँच नपुगेकाले रोकथाम नै उत्तम उपाय हो। 
          खोप लगाएर रोग नै नहुन दिनु उपचारभन्दा सजिलो र प्रभावकारी छ।
        </p>
      </section>

      {/* Consequences of Not Vaccinating */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-700">
          <span className="english-font">BCG</span> खोप नलगाएको गम्भीर परिणामहरू
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ तत्काल र जीवनलाई खतरा पुर्याउने जोखिमहरू</h3>
          <p className="text-red-800 leading-relaxed">
            <span className="english-font">BCG</span> खोप नलगाएका बच्चाहरूमा जीवनको पहिलो वर्षमा नै क्षयरोगका गम्भीर रूपहरू देखा पर्न सक्छन्। 
            दिमागको झिल्लीको क्षयरोग र मिलियरी क्षयरोग जस्ता रोगहरूले बच्चाको ज्यान लिन सक्छन् वा स्थायी अपाङ्गता निम्त्याउन सक्छन्। 
            यी रोगहरूको मृत्युदर ५०% भन्दा माथि छ यदि समयमा उपचार नभएमा।
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">स्वास्थ्य समस्याहरू र तिनका गम्भीर प्रभावहरू</h3>

        <h4 className="text-lg font-semibold mb-3 text-red-600">दिमागको झिल्लीको क्षयरोग (<span className="english-font">TB Meningitis</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो क्षयरोगको सबैभन्दा घातक रूप हो जसमा दिमागको झिल्लीमा संक्रमण हुन्छ। <strong>लक्षणहरूमा</strong> तीव्र ज्वरो (१०३-१०४°F सम्म), 
          गर्दन र पीठ कडा हुने, लगातार टाउको दुखाइ, बान्ता र चेतना हराउने, र मिर्गौलाका दौराहरू पर्छन्। 
          <strong>दीर्घकालीन प्रभावहरूमा</strong> स्थायी मानसिक अपाङ्गता, सुन्ने शक्ति गुमाउने, देख्ने शक्तिमा समस्या, र ५०-७०% मृत्युदर छ।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-red-600">मिलियरी क्षयरोग (<span className="english-font">Miliary TB</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो क्षयरोग शरीरका सबै अंगहरूमा एकसाथ फैलिने गम्भीर रूप हो। फोक्सो, कलेजो, प्लीहा, मिर्गौला सबैमा संक्रमण हुन्छ। 
          तीव्र वजन घट्ने, कमजोरी, र सास फेर्न गाह्रो हुन्छ। उपचार नगरेमा यसको मृत्युदर १००% छ र समयमा उपचार गरेमा पनि ५०% सम्म मृत्युदर हुन्छ।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-red-600">फोक्सोको क्षयरोग (<span className="english-font">Pulmonary TB</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          लगातार खोकी र रगत निस्कने, सास फेर्न गाह्रो हुने, छातीमा दुखाइ, वजन घट्ने र भोक नलाग्ने, र रातमा पसिना आउने जस्ता लक्षणहरू देखिन्छन्। 
          यो रोगले बच्चाको सामान्य विकासमा गम्भीर बाधा पुर्याउँछ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">सामाजिक र मनोवैज्ञानिक प्रभावहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>पारिवारिक तनाव:</strong> बच्चाको गम्भीर बिरामीले परिवारमा मानसिक तनाव, चिन्ता र डिप्रेसन निम्त्याउँछ। 
          आमाबुवालाई काम छोडेर बच्चाको हेरचाह गर्नुपर्छ। परिवारको दिनचर्या पूर्णतः बिग्रिन्छ र अन्य बच्चाहरूको हेरचाहमा समस्या हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सामाजिक भेदभाव:</strong> क्षयरोग संक्रामक रोग भएकाले समाजमा बच्चा र परिवारलाई अलग्याइन्छ। 
          छुवाछुत र सामाजिक बहिष्कारको सामना गर्नुपर्छ। यसले परिवारको सामाजिक प्रतिष्ठामा नकारात्मक प्रभाव पार्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>शिक्षामा बाधा:</strong> लामो समयसम्म बिरामी बच्चाले स्कूल जान सक्दैन। उपचारपछि पनि कमजोरीले अध्ययनमा असर पार्छ। 
          यसले बच्चाको भविष्यमा गम्भीर प्रभाव पार्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">आर्थिक नोक्सान र खर्चहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>प्रत्यक्ष चिकित्सा खर्चहरू:</strong> निदान खर्च (५,००० - १५,००० रुपैयाँ), औषधि खर्च (१०,००० - ५०,००० रुपैयाँ), 
          अस्पताल भर्ना (२०,००० - १,००,००० रुपैयाँ), फलोअप जाँच (५,००० - २०,००० रुपैयाँ), र जटिलता उपचार (५०,००० - ५,००,००० रुपैयाँ) 
          सम्म खर्च हुन सक्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>अप्रत्यक्ष आर्थिक हानि:</strong> काम गुमाउने वा छुट्टी लिनुपर्ने, यातायात र बसाइ खर्च, पोषणयुक्त खाना र सप्लिमेन्ट, 
          अन्य बच्चाहरूको हेरचाहमा समस्या, र पारिवारिक आयमा दीर्घकालीन प्रभाव हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>समुदायिक लागत:</strong> स्वास्थ्य सेवामा दबाब बृद्धि, अन्य बच्चाहरूमा संक्रमणको जोखिम, र सामुदायिक उत्पादकतामा हानि हुन्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">राष्ट्रिय स्तरका प्रभावहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>स्वास्थ्य सेवामा बोझ:</strong> अस्पताल र स्वास्थ्य केन्द्रहरूमा क्षयरोगका बिरामीहरूको संख्या बढ्दै जाँदा 
          अन्य रोगीहरूको उपचारमा समस्या हुन्छ र स्वास्थ्य बजेटमा अनावश्यक दबाब पर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>मानव संसाधनको हानि:</strong> स्वस्थ र शिक्षित जनशक्तिको कमीले देशको विकासमा नकारात्मक प्रभाव पार्छ। 
          उत्पादक उमेरका मानिसहरूको मृत्यु वा अपाङ्गताले राष्ट्रिय अर्थतन्त्रमा गम्भीर हानि पुर्याउँछ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>अन्तर्राष्ट्रिय छविमा नकारात्मक प्रभाव:</strong> उच्च क्षयरोग दरले देशको स्वास्थ्य सूचकाङ्कमा नकारात्मक प्रभाव पार्छ र 
          अन्तर्राष्ट्रिय सहयोग तथा व्यापारमा समस्या हुन सक्छ।
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h4 className="font-semibold mb-4 text-lg">📊 महत्वपूर्ण तथ्याङ्कहरू र तुलना</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-medium text-red-600 mb-2">बिना खोप मृत्युदर:</h5>
              <ul className="space-y-1">
                <li>• दिमागको झिल्लीको क्षयरोग: <span className="font-bold">५०-७०%</span></li>
                <li>• मिलियरी क्षयरोग: <span className="font-bold">१००%</span></li>
                <li>• फोक्सोको क्षयरोग: <span className="font-bold">१०-२०%</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-600 mb-2">उपचार अवधि:</h5>
              <ul className="space-y-1">
                <li>• दिमागको झिल्लीको क्षयरोग: <span className="font-bold">१२-१८ महिना</span></li>
                <li>• मिलियरी क्षयरोग: <span className="font-bold">९-१२ महिना</span></li>
                <li>• फोक्सोको क्षयरोग: <span className="font-bold">६-९ महिना</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-green-600 mb-2">लागत तुलना:</h5>
              <ul className="space-y-1">
                <li>• सामान्य उपचार: <span className="font-bold">२०,००० - ५०,००० रु.</span></li>
                <li>• गम्भीर अवस्था: <span className="font-bold">१,००,००० - ५,००,००० रु.</span></li>
                <li>• <span className="english-font">BCG</span> खोप: <span className="font-bold text-green-700">निःशुल्क</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Schedule and Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">BCG</span> खोपको तालिका, तरिका र महत्वपूर्ण सूचनाहरू
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">BCG</span> खोप नवजात शिशुलाई दिइने पहिलो खोप हो। यो खोप जन्मपछि जति चाँडो दिइन्छ, 
          त्यति नै प्रभावकारी हुन्छ। विश्व स्वास्थ्य संगठन र नेपाल सरकारले जन्मपछि ४८ घण्टाभित्र यो खोप दिन सिफारिस गरेको छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">खोपको समय तालिका र विस्तृत विवरण</h3>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">आदर्श समय:</h4>
              <p className="text-green-600 leading-relaxed">
                जन्मपछि <span className="font-bold">४८ घण्टाभित्र</span> दिनुपर्छ। यो समयमा दिएमा सबैभन्दा राम्रो प्रतिरक्षा मिल्छ 
                र बच्चाको शरीरले सजिलै स्वीकार गर्छ। जन्मको तुरुन्तपछि बच्चाको प्रतिरक्षा प्रणाली सबैभन्दा ग्रहणशील हुन्छ।
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">विलम्ब भएको अवस्थामा:</h4>
              <p className="text-green-600 leading-relaxed">
                यदि ४८ घण्टाभित्र दिन नसकिएमा <span className="font-bold">१२ महिनासम्म</span> दिन सकिन्छ। 
                तर जति ढिलो दिइन्छ, त्यति कम प्रभावकारी हुन्छ। १२ महिनापछि दिनुपर्ने अवस्था भएमा डाक्टरसँग सल्लाह लिनुपर्छ।
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">खुराक र मात्रा:</h4>
              <ul className="text-green-600 space-y-1">
                <li>• <span className="font-bold english-font">0.05 ml</span> (०.०५ मिलिलिटर) - यो धेरै सानो मात्रा हो</li>
                <li>• <span className="font-bold">१ पटक मात्र</span> दिइने - जीवनभरको लागि प्रभावकारी</li>
                <li>• <span className="font-bold">कुनै बुस्टर डोज</span> आवश्यक नपर्ने</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">दिने ठाउँ र तरिकाको विस्तृत जानकारी</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>स्थान:</strong> <span className="english-font">BCG</span> खोप बाँयो हातको माथिल्लो भाग (डेल्टोइड मांसपेशी)मा दिइन्छ। 
          यो ठाउँ छनोट गर्नुको मुख्य कारण यहाँ दाग देखिएमा खोप लगाएको प्रमाण मिल्छ। यो दाग जीवनभर रहन्छ र 
          भविष्यमा स्वास्थ्य सेवा लिँदा खोपको इतिहास थाहा पाउन सकिन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>तरिका (<span className="english-font">Intradermal Method</span>):</strong> यो खोप छालामुनि 
          (<span className="english-font">Intradermal</span>) विधिबाट दिइन्छ। सुई ४५ डिग्री कोणमा छिराएर इन्जेक्सन दिइन्छ। 
          सही तरिकाले दिएमा सानो फोकाको आकारमा सुन्निने देखिनुपर्छ। इन्जेक्सनपछि कुनै मसाज वा दबाब दिइँदैन।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">खोपपछिका सामान्य प्रतिक्रियाहरू र समयावधि</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <span className="english-font">BCG</span> खोपको प्रतिक्रिया अन्य खोपहरूभन्दा फरक हुन्छ। यसको प्रतिक्रिया ढिलो देखिन्छ र 
          केही महिनासम्म चल्छ। यो सामान्य प्रक्रिया हो र चिन्ता लिनु पर्दैन।
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">२-४ हप्तामा:</h4>
            <ul className="text-purple-600 space-y-1 text-sm">
              <li>• खोप लगाएको ठाउँमा सानो गाँठो बन्ने</li>
              <li>• हल्का रातो हुने र छुँदा अलिकति दुख्ने</li>
              <li>• यो सामान्य प्रतिक्रिया हो, चिन्ता लिनु नपर्ने</li>
              <li>• बच्चालाई सामान्य नुहाउन दिन सकिन्छ</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">६-८ हप्तामा:</h4>
            <ul className="text-purple-600 space-y-1 text-sm">
              <li>• गाँठोमा सानो पिप आउने</li>
              <li>• केही मात्रामा सफा पानी निस्कने</li>
              <li>• फेरि सुक्दै जाने र बिस्तारै निको हुने</li>
              <li>• यी सबै प्राकृतिक प्रक्रिया हुन्, कुनै चिकित्सा आवश्यक नपर्ने</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-700 mb-2">३-६ महिनामा:</h4>
            <ul className="text-purple-600 space-y-1 text-sm">
              <li>• स्थायी दाग बन्ने (जीवनभरको लागि)</li>
              <li>• यो दागले खोप लगाएको प्रमाण दिन्छ</li>
              <li>• दाग नदेखिएमा खोप काम नगरेको हुन सक्छ - डाक्टरसँग सल्लाह लिने</li>
              <li>• दागको आकार सामान्यतया ५-१५ मिमी हुन्छ</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">सावधानीहरू र गर्नुनपर्ने महत्वपूर्ण कामहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>खोप दिनुअघि सुनिश्चित गर्नुपर्ने कुराहरू:</strong> बच्चा स्वस्थ र ज्वरो नभएको सुनिश्चित गर्ने, 
          जन्मको वजन १.५ केजी भन्दा कम नभएको, गम्भीर संक्रमण वा जन्मजात इम्युनिटी समस्या नभएको। 
          यदि आमालाई <span className="english-font">HIV</span> संक्रमण छ भने विशेष सावधानी अपनाउनुपर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>खोपपछि गर्नुपर्ने हेरचाह:</strong> खोप लगाएको ठाउँ सफा र सुक्खा राख्ने, कुनै मलम वा पट्टी नलगाउने, 
          बच्चालाई सामान्य नुहाउन दिन सकिन्छ, स्तनपान जारी राख्ने। खोप लगाएको ठाउँलाई बारम्बार छुनु नहुने र 
          फोकेको अवस्थामा निचोड्नु नहुने।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-red-700">🚨 तुरुन्त डाक्टरलाई सम्पर्क गर्नुपर्ने अवस्थाहरू</h3>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-700 mb-3">गम्भीर लक्षणहरू:</h4>
              <ul className="text-red-600 space-y-2 text-sm leading-relaxed">
                <li>• ज्वरो १०२°F (३९°C) भन्दा माथि</li>
                <li>• लगातार ३ दिनभन्दा बढी ज्वरो</li>
                <li>• बच्चाले दूध नपिउने वा बान्ता गर्ने</li>
                <li>• असामान्य रूपमा सुस्त वा चेतना हराउने</li>
                <li>• सास फेर्न गाह्रो हुने वा छातीमा तान्न्ने</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">खोप ठाउँका गम्भीर समस्याहरू:</h4>
              <ul className="text-red-600 space-y-2 text-sm leading-relaxed">
                <li>• अत्यधिक सुन्निने र तातो महसुस हुने</li>
                <li>• पिप निकलेर ६ महिनाभन्दा बढी ननिको हुने</li>
                <li>• कान्छी वा अन्य ठाउँमा सुन्निने</li>
                <li>• ठूलो घाउ वा गहिरो खाडल बन्ने</li>
                <li>• दुर्गन्ध आउने वा हरियो पिप निस्कने</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">महत्वपूर्ण सम्झनाहरू र व्यावहारिक सुझावहरू</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">आमाबुवाका लागि महत्वपूर्ण कुराहरू:</h4>
              <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>• खोप कार्ड सुरक्षित राख्नुहोस् - यो जीवनभरको दस्तावेज हो</li>
                <li>• दाग बनेको तस्बिर खिच्नुहोस् - भविष्यको सन्दर्भका लागि</li>
                <li>• अन्य खोपहरूको तालिका समयमा पालना गर्नुहोस्</li>
                <li>• स्तनपान जारी राख्नुहोस् - यसले प्रतिरक्षा बढाउँछ</li>
                <li>• पोषणयुक्त खाना दिनुहोस् र सफाइमा ध्यान दिनुहोस्</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">स्वास्थ्यकर्मीका लागि दिशानिर्देश:</h4>
              <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
                <li>• सही <span className="english-font">Intradermal</span> तरिकाले इन्जेक्सन दिनुहोस्</li>
                <li>• खोप कार्डमा मिति र ब्याच नम्बर लेख्नुहोस्</li>
                <li>• आमाबुवालाई सही जानकारी र अपेक्षा गर्नुपर्ने कुराहरू भन्नुहोस्</li>
                <li>• ६-८ हप्तामा फलोअपको लागि बोलाउनुहोस्</li>
                <li>• कुनै असामान्य साइड इफेक्ट भएमा तुरुन्त रिपोर्ट गर्नुहोस्</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">निष्कर्ष</h4>
          <p className="text-blue-800 leading-relaxed">
            <span className="english-font">BCG</span> खोप एक सुरक्षित, प्रभावकारी र जीवनरक्षक खोप हो जसले बच्चाहरूलाई क्षयरोगका गम्भीर रूपहरूबाट बचाउँछ। 
            यो खोप नेपालमा निःशुल्क उपलब्ध छ र जन्मपछि जति चाँडो दिइन्छ त्यति नै फाइदाजनक हुन्छ। 
            सबै आमाबुवाले आफ्ना बच्चाहरूलाई समयमा यो खोप दिलाउनुपर्छ।
          </p>
        </div>
      </section>
    </div>
  );
}
