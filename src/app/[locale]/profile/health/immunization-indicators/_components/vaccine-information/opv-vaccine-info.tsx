import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OPVVaccineInfo() {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {/* Main Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          <span className="english-font">OPV</span> खोप (ओरल पोलियो खोप) - विस्तृत जानकारी
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="english-font font-medium">OPV (Oral Polio Vaccine)</span> खोप पोलियोमाइलाइटिस रोग विरुद्धको सुरक्षा प्रदान गर्ने मुखबाट दिइने जीवित तर कमजोर पारिएको खोप हो। यो खोप विश्वव्यापी पोलियो उन्मूलन अभियानमा मुख्य भूमिका खेलेको छ र ६, १०, १४ हप्ताको उमेरमा तीन चरणमा दिइन्छ।
        </p>
      </div>

      {/* Introduction and Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">OPV</span> खोपको परिचय र इतिहास
        </h2>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="english-font font-medium">OPV (Oral Polio Vaccine)</span> खोप डा. अल्बर्ट साबिनद्वारा १९६१ मा विकसित गरिएको थियो। यो मुखबाट दिइने जीवित तर कमजोर पारिएको खोप हो जसले पोलियोभाइरसका तीनैवटा प्रकार (Type 1, 2, र 3) विरुद्ध सुरक्षा प्रदान गर्छ। यो खोपले विश्वमा पोलियो उन्मूलनमा क्रान्तिकारी भूमिका खेलेको छ।
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            सन् १९८८ मा विश्वभर वार्षिक ३,५०,००० भन्दा बढी पोलियो केसहरू थिए, तर यो खोपको व्यापक प्रयोगले २०२३ सम्ममा यो संख्या ३० भन्दा कममा झारेको छ - यो ९९.९% भन्दा बढी कमी हो। नेपालमा यो खोप १९७९ सालदेखि राष्ट्रिय खोप कार्यक्रमको भाग बनेको छ र २००० सालदेखि नेपाल पोलियोमुक्त देश घोषित भएको छ।
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            <span className="english-font">OPV</span> खोपको विशेषता यो हो कि यसले न केवल व्यक्तिलाई सुरक्षा दिन्छ बल्कि आन्द्रामा बलियो प्रतिरक्षा निर्माण गरेर भाइरसको फैलावटलाई समुदायिक स्तरमा रोक्छ। यो झुण्ड प्रतिरक्षा (Herd Immunity) निर्माणमा अत्यन्त प्रभावकारी छ।
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">खोपको प्राविधिक विवरण</h3>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-blue-900 mb-3">मुख्य विशेषताहरू:</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• मुखबाट दिइने तरल खोप (२ थोपा)</li>
                <li>• जीवित तर कमजोर पारिएको <span className="english-font">Poliovirus</span></li>
                <li>• तीनवटा प्रकारका पोलियो भाइरसविरुद्ध सुरक्षा</li>
                <li>• सजिलो र सुरक्षित प्रशासन</li>
                <li>• २-८°C तापक्रममा भण्डारण गरिने</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-3">दिने तरिका र सावधानी:</h4>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>• बच्चाको जिब्रोमा २ थोपा दिने</li>
                <li>• खाना खानुअघि दिने (३० मिनेट अन्तर)</li>
                <li>• बान्ता भएमा दोहोर्याउने</li>
                <li>• दिसा भएमा केही दिन पर्खने</li>
                <li>• अन्य खोपसँग सँगै दिन सकिने</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Against Diseases */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">OPV</span> खोपले कुन रोगबाट सुरक्षा दिन्छ?
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">OPV</span> खोपले मुख्यतः पोलियोमाइलाइटिस रोगबाट सुरक्षा प्रदान गर्छ। यो रोग पोलियोभाइरसका तीनवटा प्रकारले गर्छ र मुख्यतः स्नायु प्रणालीलाई आक्रमण गरेर स्थायी लकवा निम्त्याउन सक्छ। खोपको प्रभावकारिता खुराकको संख्या अनुसार बढ्दै जान्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">पोलियोमाइलाइटिस (<span className="english-font">Poliomyelitis</span>)</h3>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          पोलियोमाइलाइटिस पोलियोभाइरसले गर्दा हुने तीव्र संक्रामक रोग हो जसले मुख्यतः स्नायु प्रणालीमा आक्रमण गर्छ। यो भाइरस मुख र नाकबाट शरीरमा प्रवेश गर्छ र आन्द्रामा प्रजनन गर्छ। <strong>९५% केसहरूमा</strong> कुनै लक्षण नदेखिने वा हल्का ज्वरो मात्र हुन्छ, तर <strong>१% केसहरूमा</strong> स्थायी लकवा हुन्छ। <span className="english-font">OPV</span> खोपले तीन खुराकपछि <strong>९५-९९%</strong> सुरक्षा प्रदान गर्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">पोलियोका विभिन्न प्रकारहरू</h3>
        
        <h4 className="text-lg font-semibold mb-3 text-gray-700">मेरुदण्डको पोलियो (<span className="english-font">Spinal Polio</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो पोलियोको सबैभन्दा सामान्य रूप हो जसले मेरुदण्डको स्नायुहरूमा आक्रमण गर्छ। यसले खुट्टा, हात वा शरीरका अन्य भागहरूमा स्थायी लकवा निम्त्याउन सक्छ। प्रभावित मांसपेशीहरू कमजोर हुन्छन् र बिस्तारै सुक्दै जान्छन्। बच्चाहरूमा यसले हड्डीको विकृति र वृद्धिमा समस्या निम्त्याउन सक्छ।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-gray-700">बल्बार पोलियो (<span className="english-font">Bulbar Polio</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          यो पोलियोको सबैभन्दा घातक रूप हो जसले दिमागको स्टेमलाई प्रभावित पार्छ। यसले सास फेर्ने, निल्ने र बोल्ने कार्यहरूलाई नियन्त्रण गर्ने स्नायुहरूमा आक्रमण गर्छ। यो अवस्थामा तुरुन्तै भेन्टिलेटरको आवश्यकता पर्छ र मृत्युदर ५०% सम्म पुग्न सक्छ।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-gray-700">बल्बोस्पाइनल पोलियो (<span className="english-font">Bulbospinal Polio</span>)</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          यो मिश्रित प्रकार हो जसले दिमागको स्टेम र मेरुदण्ड दुवैलाई प्रभावित पार्छ। यसमा सास फेर्न गाह्रो हुने र हात-खुट्टामा लकवा दुवै समस्याहरू देखा पर्छन्। यो अवस्था अत्यन्त गम्भीर हुन्छ र व्यापक चिकित्सा हेरचाहको आवश्यकता पर्छ।
        </p>

        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-3">खोपको प्रभावकारिताको सारांश:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-white rounded">
              <div className="text-xl font-bold text-yellow-700">५०-७०%</div>
              <div className="text-gray-600">एक खुराकमा</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-xl font-bold text-orange-700">८५-९०%</div>
              <div className="text-gray-600">दुई खुराकमा</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-xl font-bold text-green-700">९५-९९%</div>
              <div className="text-gray-600">तीन खुराकमा</div>
            </div>
            <div className="text-center p-3 bg-white rounded">
              <div className="text-xl font-bold text-blue-700">जीवनभर</div>
              <div className="text-gray-600">सुरक्षा अवधि</div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance and Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">OPV</span> खोपको महत्व र फाइदाहरू
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">OPV</span> खोप मानव इतिहासको सबैभन्दा सफल सार्वजनिक स्वास्थ्य हस्तक्षेपहरू मध्ये एक हो। यसले विश्वभर लाखौं बच्चाहरूलाई लकवाबाट बचाएको छ र पोलियो उन्मूलनको सपनालाई साकार पार्ने नजिक पुर्याएको छ। यो खोपको महत्व केवल व्यक्तिगत सुरक्षामा मात्र सीमित नभएर विश्वव्यापी स्वास्थ्य सुधारमा व्यापक प्रभाव पारेको छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">व्यक्तिगत स्तरका फाइदाहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>पूर्ण लकवा सुरक्षा:</strong> <span className="english-font">OPV</span> खोपले पोलियो लकवाबाट लगभग पूर्ण सुरक्षा प्रदान गर्छ। तीन खुराक पूरा गरेका बच्चाहरूमा पोलियो लकवाको जोखिम ९९% भन्दा बढी कम हुन्छ। यसले बच्चाहरूलाई सामान्य शारीरिक विकास र गतिशीलताको अवसर प्रदान गर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>आन्द्राको मजबूत प्रतिरक्षा:</strong> यो खोपले आन्द्रामा स्थानीय प्रतिरक्षा निर्माण गर्छ जसले भाइरसको प्रजनन र फैलावटलाई रोक्छ। यो विशेषता अन्य पोलियो खोपहरूमा यति प्रभावकारी रूपमा पाइँदैन।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>जीवनगुणस्तरमा सुधार:</strong> पोलियोबाट बचेका बच्चाहरूले सामान्य जीवन बिताउन सक्छन्, खेलकुद गर्न सक्छन्, शिक्षा लिन सक्छन् र भविष्यमा कुनै पनि पेशामा काम गर्न सक्छन्। यसले तिनीहरूको आत्मविश्वास र सामाजिक सहभागितामा सकारात्मक प्रभाव पार्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>जीवनभर सुरक्षा:</strong> एक पटक पूरा खुराक लिएपछि व्यक्तिले जीवनभर पोलियोविरुद्ध सुरक्षा पाउँछ। यसका लागि कुनै बुस्टर डोजको आवश्यकता पर्दैन, जसले यसलाई अत्यन्त लागत-प्रभावकारी बनाउँछ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">सामुदायिक र सामाजिक फाइदाहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>झुण्ड प्रतिरक्षा निर्माण:</strong> जब समुदायका ८०% भन्दा बढी बच्चाहरूले <span className="english-font">OPV</span> खोप लगाउँछन्, तब पोलियोभाइरसको संक्रमण श्रृंखला टुट्छ। यसले खोप नलगाएका बच्चाहरूलाई पनि अप्रत्यक्ष सुरक्षा प्रदान गर्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>रोग उन्मूलनमा योगदान:</strong> <span className="english-font">OPV</span> खोपले विश्वभर पोलियो उन्मूलनमा मुख्य भूमिका खेलेको छ। तीनमध्ये दुई प्रकारका पोलियोभाइरस (Type 2 र Type 3) पहिले नै उन्मूलन भएका छन् र Type 1 मात्र बाँकी छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>स्वास्थ्य प्रणालीमा दबाब कमी:</strong> पोलियो केसहरूमा आएको नाटकीय कमीले अस्पतालहरूमा लामो समयसम्म हुने उपचार र पुनर्वासको आवश्यकता घटेको छ। यसले स्वास्थ्य सेवाकर्मीहरूलाई अन्य स्वास्थ्य समस्याहरूमा ध्यान दिन सक्ने वातावरण सिर्जना गरेको छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>आर्थिक लाभ:</strong> पोलियो रोकथामले समाजमा ठूलो आर्थिक बचत गराएको छ। खोप कार्यक्रमको लागत अपाङ्गता भएका व्यक्तिहरूको जीवनभरको हेरचाह खर्चभन्दा धेरै कम छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">विश्वव्यापी स्वास्थ्य प्रभाव</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सफल उन्मूलन अभियान:</strong> Global Polio Eradication Initiative ले सन् १९८८ देखि अहिलेसम्म ९९.९% भन्दा बढी पोलियो केसहरूमा कमी ल्याएको छ। यो मानव इतिहासको सबैभन्दा ठूलो स्वास्थ्य हस्तक्षेप मानिन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>लाखौं बच्चाहरूको जीवन बचत:</strong> अनुमान गरिएको छ कि यो खोप कार्यक्रमले २० लाखभन्दा बढी बच्चाहरूलाई लकवाबाट बचाएको छ। यी बच्चाहरू अहिले स्वस्थ वयस्क भएर समाजमा योगदान दिइरहेका छन्।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>भविष्यका पुस्ताहरूका लागि सुरक्षा:</strong> पोलियो उन्मूलन भएपछि भविष्यका पुस्ताहरूलाई यो खोप लगाउनुपर्ने आवश्यकता नै पर्दैन। यसले दीर्घकालीन स्वास्थ्य र आर्थिक फाइदा प्रदान गर्छ।
        </p>
      </section>

      {/* Consequences of Not Vaccinating */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-700">
          <span className="english-font">OPV</span> खोप नलगाएको गम्भीर परिणामहरू
        </h2>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ पोलियोमाइलाइटिसका जीवनघातक जोखिमहरू</h3>
          <p className="text-red-800 leading-relaxed">
            <span className="english-font">OPV</span> खोप नलगाएका बच्चाहरूमा पोलियोमाइलाइटिसको जोखिम अत्यधिक बढ्छ। यद्यपि ९५% केसहरूमा कुनै लक्षण नदेखिने वा हल्का ज्वरो मात्र हुन्छ, तर बाँकी ५% केसहरूमा गम्भीर स्नायविक समस्याहरू देखा पर्छन्। यीमध्ये १% केसहरूमा स्थायी लकवा हुन्छ र ५-१०% लकवा भएका बच्चाहरूको मृत्यु हुन्छ।
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">शारीरिक अपाङ्गता र त्यसका प्रभावहरू</h3>

        <h4 className="text-lg font-semibold mb-3 text-red-600">मेरुदण्डको पोलियोका परिणामहरू</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          मेरुदण्डको पोलियोले मुख्यतः खुट्टा र हातका मांसपेशीहरूमा आक्रमण गर्छ। <strong>तत्काल प्रभावहरूमा</strong> मांसपेशीमा तीव्र दुखाइ, कमजोरी र चल्न नसक्ने समस्या हुन्छ। <strong>दीर्घकालीन परिणामहरूमा</strong> स्थायी लकवा, मांसपेशी सुक्ने, हड्डीको विकृति, खुट्टाको आकार फरक हुने र चल्न नसक्ने अवस्था हुन्छ। बच्चाहरूमा बृद्धिसँगै यी समस्याहरू झन् जटिल बन्दै जान्छन्।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-red-600">बल्बार पोलियोका घातक परिणामहरू</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          बल्बार पोलियो सबैभन्दा घातक रूप हो जसले दिमागको स्टेमलाई प्रभावित पार्छ। यसले <strong>सास फेर्ने मांसपेशीहरूलाई</strong> पक्षाघात गराउँछ, जसका कारण बच्चाले सास फेर्न सक्दैन। <strong>निल्ने र बोल्ने क्षमतामा</strong> समस्या हुन्छ। यस अवस्थामा तुरुन्तै कृत्रिम सास मेसिन (भेन्टिलेटर) को आवश्यकता पर्छ। उपचार नगरेमा केही घण्टाभित्रै मृत्यु हुन्छ।
        </p>

        <h4 className="text-lg font-semibold mb-3 text-red-600">पोस्ट-पोलियो सिन्ड्रोम</h4>
        <p className="text-base leading-relaxed text-gray-700 mb-6">
          पोलियो लकवाबाट निको भएका व्यक्तिहरूमा १५-४० वर्षपछि पोस्ट-पोलियो सिन्ड्रोम देखा पर्न सक्छ। यसमा पुनः मांसपेशी कमजोर हुने, थकान, जोर्नीको दुखाइ र सास फेर्न गाह्रो हुने समस्याहरू हुन्छन्। यो अवस्था बिस्तारै बिग्रिंदै जान्छ र पूर्ण निको हुने उपचार छैन।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">मानसिक र सामाजिक प्रभावहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>मानसिक स्वास्थ्यमा प्रभाव:</strong> अपाङ्गता भएका बच्चाहरूमा डिप्रेसन, चिन्ता र आत्मविश्वासको कमी हुन्छ। उनीहरूले आफूलाई अन्य बच्चाहरूभन्दा फरक र कमजोर महसुस गर्छन्। यसले उनीहरूको व्यक्तित्व विकासमा नकारात्मक प्रभाव पार्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सामाजिक भेदभाव र बहिष्करण:</strong> नेपालको सन्दर्भमा अपाङ्गता भएका बच्चाहरूलाई सामाजिक कलंक र भेदभावको सामना गर्नुपर्छ। उनीहरूलाई सामान्य गतिविधिहरूमा सहभागी हुन दिइँदैन र शिक्षाको अवसरमा भेदभाव हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>शैक्षिक र व्यावसायिक अवसरहरूमा सीमा:</strong> शारीरिक अपाङ्गताका कारण बच्चाहरूले नियमित स्कूल जान नसक्ने हुन्छन्। विशेष शिक्षाको सुविधा नेपालमा सीमित छ। भविष्यमा रोजगारीका अवसरहरू पनि सीमित हुन्छन्।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>पारिवारिक तनाव:</strong> अपाङ्गता भएका बच्चाको हेरचाहले परिवारमा ठूलो तनाव सिर्जना गर्छ। आमाबुवालाई काम छोडेर बच्चाको हेरचाहमा पूर्णकालीन लाग्नुपर्छ। यसले पारिवारिक सम्बन्धमा तनाव र आर्थिक संकट निम्त्याउँछ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">आर्थिक नोक्सान र जीवनभरको बोझ</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>तत्काल चिकित्सा खर्च:</strong> पोलियो लकवाको तत्काल उपचारमा अस्पतालमा लामो समयसम्म भर्ना, भेन्टिलेटर सेवा, फिजियोथेरापी र विशेष हेरचाहको खर्च लाखौं रुपैयाँ पुग्न सक्छ। गहन उपचार कक्ष (ICU) मा एक दिनको खर्च मात्रै २०,००० रुपैयाँभन्दा बढी हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सहायक उपकरणहरूको खर्च:</strong> व्हीलचेयर, क्र्याचेस, कृत्रिम अंग, ब्रेसेस जस्ता सहायक उपकरणहरूको प्रारम्भिक खर्च ५०,००० देखि ५ लाख रुपैयाँसम्म पुग्न सक्छ। यी उपकरणहरू नियमित मर्मत र प्रतिस्थापन चाहिन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>दीर्घकालीन हेरचाह खर्च:</strong> पोलियो लकवा भएका व्यक्तिहरूलाई जीवनभर फिजियोथेरापी, ओकुपेशनल थेरापी, र नियमित चिकित्सा जाँचको आवश्यकता पर्छ। यो वार्षिक खर्च १-२ लाख रुपैयाँसम्म पुग्न सक्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>आयको हानि:</strong> अपाङ्गता भएका व्यक्तिहरूको आम्दानी क्षमता सामान्य व्यक्तिभन्दा ५०-७०% कम हुन्छ। यसले जीवनभरको आर्थिक नोक्सान करोडौं रुपैयाँसम्म पुग्न सक्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">राष्ट्रिय र सामुदायिक प्रभावहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>स्वास्थ्य प्रणालीमा दबाब:</strong> पोलियो केसहरू बढेमा अस्पतालका सीमित स्रोतहरूमा दबाब पर्छ। विशेष हेरचाह र पुनर्वास सेवाहरूको माग बढ्छ जुन महंगो र जटिल हुन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>उत्पादकताको हानि:</strong> अपाङ्गता भएका व्यक्तिहरूले श्रमिक शक्तिमा पूर्ण योगदान दिन नसक्दा राष्ट्रिय उत्पादकतामा हानि हुन्छ। यसले देशको आर्थिक विकासमा नकारात्मक प्रभाव पार्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>अन्तर्राष्ट्रिय छवि र व्यापारमा प्रभाव:</strong> यदि नेपालमा पोलियो फेरि देखा पर्यो भने अन्तर्राष्ट्रिय स्तरमा नकारात्मक छवि बन्छ। यसले पर्यटन र व्यापारमा समस्या निम्त्याउन सक्छ।
        </p>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h4 className="font-semibold mb-4 text-lg">📊 महत्वपूर्ण तथ्याङ्कहरू र तुलना</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-medium text-red-600 mb-2">पोलियो लकवाको जोखिम:</h5>
              <ul className="space-y-1">
                <li>• संक्रमितहरूमध्ये: <span className="font-bold">१%</span></li>
                <li>• लकवा भएकाहरूमा मृत्यु: <span className="font-bold">५-१०%</span></li>
                <li>• बल्बार पोलियोमा मृत्यु: <span className="font-bold">५०%</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-blue-600 mb-2">विश्वव्यापी प्रभाव:</h5>
              <ul className="space-y-1">
                <li>• १९८८ मा केसहरू: <span className="font-bold">३,५०,०००+</span></li>
                <li>• २०२३ मा केसहरू: <span className="font-bold">३० भन्दा कम</span></li>
                <li>• कमी दर: <span className="font-bold">९९.९%+</span></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-green-600 mb-2">खोप बनाम लागत:</h5>
              <ul className="space-y-1">
                <li>• <span className="english-font">OPV</span> खोप: <span className="font-bold text-green-700">निःशुल्क</span></li>
                <li>• लकवाको जीवनभर खर्च: <span className="font-bold">१-५ करोड रु.</span></li>
                <li>• बचाइएका जीवन: <span className="font-bold">२० लाख+</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccination Schedule and Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="english-font">OPV</span> खोपको तालिका र व्यावहारिक दिशानिर्देश
        </h2>
        
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <span className="english-font">OPV</span> खोप मुखबाट दिइने तरल खोप हो जुन बच्चाको जिब्रोमा २ थोपा दिइन्छ। यो खोप अन्य खोपहरूसँग सँगै दिन सकिन्छ र कुनै विशेष तयारीको आवश्यकता पर्दैन। तर केही सावधानीहरू अपनाउनुपर्छ जसले खोपको प्रभावकारिता बढाउँछ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">खोपको विस्तृत समय तालिका</h3>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-3">पहिलो खुराक (<span className="english-font">OPV1</span>) - ६ हप्ताको उमेरमा:</h4>
              <p className="text-green-600 leading-relaxed mb-2">
                यो प्राथमिक खुराक हो जसले बच्चाको प्रतिरक्षा प्रणालीलाई पोलियोभाइरस चिन्न सिकाउँछ। यस खुराकले ५०-७०% सुरक्षा प्रदान गर्छ। यो <span className="english-font">DPT-HepB-Hib</span> खोपसँग सँगै दिइन्छ।
              </p>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• न्यूनतम उमेर: ६ हप्ता</li>
                <li>• प्रभावकारिता: ५०-७०%</li>
                <li>• अन्य खोपसँग: सँगै दिन सकिने</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-3">दोस्रो खुराक (<span className="english-font">OPV2</span>) - १० हप्ताको उमेरमा:</h4>
              <p className="text-green-600 leading-relaxed mb-2">
                यो बुस्टर खुराकले पहिलो खुराकको प्रभावलाई बलियो बनाउँछ र प्रतिरक्षा स्तर ८५-९०% सम्म पुर्याउँछ। पहिलो खुराकबाट कम्तिमा ४ हप्ताको अन्तर आवश्यक छ।
              </p>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• पहिलो खुराकबाट अन्तर: ४ हप्ता</li>
                <li>• संयुक्त प्रभावकारिता: ८५-९०%</li>
                <li>• महत्व: मध्यम अवधिको बलियो सुरक्षा</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-700 mb-3">तेस्रो खुराक (<span className="english-font">OPV3</span>) - १४ हप्ताको उमेरमा:</h4>
              <p className="text-green-600 leading-relaxed mb-2">
                यो अन्तिम प्राथमिक खुराक हो जसले प्रतिरक्षा स्तर ९५-९९% सम्म पुर्याउँछ। यस खुराकपछि बच्चाले पोलियोविरुद्ध पूर्ण सुरक्षा प्राप्त गर्छ र जीवनभर सुरक्षित रहन्छ।
              </p>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• दोस्रो खुराकबाट अन्तर: ४ हप्ता</li>
                <li>• प्रभावकारिता: ९५-९९%</li>
                <li>• अवधि: जीवनभर सुरक्षा</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">खोप दिने विधि र महत्वपूर्ण सावधानीहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सही विधि:</strong> <span className="english-font">OPV</span> खोप स्पेशल ड्रपरको माध्यमबाट बच्चाको जिब्रोमा २ थोपा दिइन्छ। खोप दिनुअघि बच्चालाई शान्त पार्नुपर्छ र रुन्दै गरेको अवस्थामा दिनु हुँदैन। खोप दिएपछि बच्चाले गिल्नुपर्छ र बान्ता गर्नु हुँदैन।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>खुवाउने समय:</strong> खोप दिनुअघि र पछि ३० मिनेटसम्म बच्चालाई केही नखुवाउनुपर्छ। यदि स्तनपान गराइरहेको छ भने खोप दिनुअघि केही समय रोक्नुपर्छ। यसले खोपको प्रभावकारिता बढाउँछ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>भण्डारण र तयारी:</strong> खोप २-८°C तापक्रममा भण्डारण गरिनुपर्छ र प्रयोगअघि राम्रोसँग हल्लाउनुपर्छ। खोल्दो खोप ६ घण्टाभित्र प्रयोग गरिसक्नुपर्छ।
        </p>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">विशेष परिस्थितिहरू र तिनका समाधान</h3>
        
        <div className="space-y-4 mb-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-700 mb-2">बान्ता भएको अवस्थामा:</h4>
            <p className="text-yellow-600 text-sm leading-relaxed">
              यदि बच्चाले खोप दिएको ५ मिनेटभित्र बान्ता गर्यो भने खोप दोहोर्याउनुपर्छ। यदि दोहोर्याएको खोपमा पनि बान्ता भयो भने अर्को भिजिटमा दिनुपर्छ। बान्ताको कारण खत्ताल गर्न नहुने।
            </p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-semibold text-orange-700 mb-2">दिसा भएको अवस्थामा:</h4>
            <p className="text-orange-600 text-sm leading-relaxed">
              बच्चालाई दिसा भएको अवस्थामा खोप दिनु हुँदैन। दिसा निको नभएसम्म पर्खनुपर्छ। यो सामान्यतया २-३ दिनमा निको हुन्छ। दिसाले आन्द्राको प्रतिरक्षा निर्माणमा बाधा पुर्याउन सक्छ।
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">बिरामी बच्चाको अवस्थामा:</h4>
            <p className="text-blue-600 text-sm leading-relaxed">
              तीव्र ज्वरो, गम्भीर संक्रमण वा अन्य गम्भीर बिरामी भएको बच्चालाई खोप स्थगित गर्नुपर्छ। हल्का रुघाखोकी भएमा दिन सकिन्छ तर निर्णय स्वास्थ्यकर्मीले गर्नुपर्छ।
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-red-700">🚨 तुरुन्त डाक्टरलाई सम्पर्क गर्नुपर्ने अवस्थाहरू</h3>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-700 mb-3">गम्भीर एलर्जिक रिएक्सन:</h4>
              <ul className="text-red-600 space-y-2 text-sm leading-relaxed">
                <li>• अनुहार, ओठ, जिब्रो सुन्निने</li>
                <li>• सास फेर्न गाह्रो हुने</li>
                <li>• शरीरमा दाना निस्कने र खुजली</li>
                <li>• चेतना हराउने वा गहिरो निद्रामा जाने</li>
                <li>• असामान्य रोदन वा चिच्याहट</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-700 mb-3">अन्य गम्भीर लक्षणहरू:</h4>
              <ul className="text-red-600 space-y-2 text-sm leading-relaxed">
                <li>• ज्वरो १०३°F (३९.५°C) भन्दा माथि</li>
                <li>• लगातार बान्ता र पखाला</li>
                <li>• मिर्गौलाका दौराहरू वा ऐंठन</li>
                <li>• अत्यधिक सुस्तता र निष्क्रियता</li>
                <li>• दूध नपिउने वा खान नमान्ने</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-800">पल्स पोलियो अभियान र विशेष खुराकहरू</h3>
        
        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>राष्ट्रिय खोप दिवस:</strong> नेपालमा वर्षमा दुई पटक राष्ट्रिय खोप दिवस मनाइन्छ जसमा ५ वर्षमुनिका सबै बच्चाहरूलाई <span className="english-font">OPV</span> खोप दिइन्छ। यो मार्च र अप्रिल महिनामा आयोजना गरिन्छ। नियमित खोप लगाएका बच्चाहरूलाई पनि यो अतिरिक्त खुराक दिइन्छ।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-4">
          <strong>सब-राष्ट्रिय खोप दिवस:</strong> विशेष जोखिम भएका क्षेत्रहरूमा सब-राष्ट्रिय खोप दिवस आयोजना गरिन्छ। यसमा सीमावर्ती क्षेत्र, उच्च जनसंख्या घनत्व भएका ठाउँ र पोलियोको जोखिम बढी भएका इलाकाहरू समावेश छन्।
        </p>

        <p className="text-base leading-relaxed text-gray-700 mb-6">
          <strong>सहभागिताको महत्व:</strong> सबै आमाबुवाले आफ्ना बच्चाहरूलाई यी अभियानहरूमा सहभागी गराउनुपर्छ। यसले व्यक्तिगत सुरक्षा मात्र नभएर सामुदायिक सुरक्षामा योगदान पुर्याउँछ।
        </p>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-3">निष्कर्ष</h4>
          <p className="text-blue-800 leading-relaxed">
            <span className="english-font">OPV</span> खोप मानव इतिहासको सबैभन्दा सफल स्वास्थ्य हस्तक्षेप मध्ये एक हो। यसले लाखौं बच्चाहरूलाई लकवाबाट बचाएको छ र पोलियो उन्मूलनको सपनालाई साकार पार्ने नजिक पुर्याएको छ। नेपालमा यो खोप निःशुल्क उपलब्ध छ र सबै तीन खुराक पूरा गर्नु अत्यन्त महत्वपूर्ण छ। सबै आमाबुवाले आफ्ना बच्चाहरूलाई समयमा यो खोप दिलाउनुपर्छ र राष्ट्रिय खोप अभियानहरूमा सक्रिय सहभागिता जनाउनुपर्छ।
          </p>
        </div>
      </section>
    </div>
  );
}
