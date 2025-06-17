import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5 mb-5">

      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">🌾 Gour Krishi Seva Kendra</h1>
        <p className="lead text-muted">
          हमारे यहाँ हर प्रकार के कृषि बीज, खाद, और उपकरण उचित मूल्य पर उपलब्ध हैं।
        </p>
        <button className="btn btn-primary btn-lg px-4 py-2 mt-3 shadow-sm">हमसे संपर्क करें</button>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">🌱 उच्च गुणवत्ता के बीज</h5>
              <p className="card-text">हम किसानों को प्रमाणित और उच्च गुणवत्ता वाले बीज प्रदान करते हैं।</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">🧪 खाद और दवाइयाँ</h5>
              <p className="card-text">बेहतर फसल के लिए उत्तम किस्म की खाद और कीटनाशक उपलब्ध हैं।</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-semibold">📋 कृषि परामर्श</h5>
              <p className="card-text">कृषि विशेषज्ञों द्वारा उन्नत खेती के लिए सलाह और मार्गदर्शन।</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center text-primary mb-4">🔍 हमारी विशेषताएं</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ किसानों की जरूरतों को समझने वाला स्टाफ</li>
            <li className="list-group-item">✅ ताजा और प्रमाणित उत्पाद</li>
            <li className="list-group-item">✅ हर मौसम के लिए विशेष उत्पाद</li>
            <li className="list-group-item">✅ समय-समय पर मुफ्त कृषि परामर्श</li>
          </ul>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-center text-primary mb-4">🌟 हमारे ग्राहक क्या कहते हैं?</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded p-3 shadow-sm">
              <p className="fst-italic">"मैं पिछले 3 साल से यहां से बीज और खाद खरीद रहा हूँ। गुणवत्ता और सेवा दोनों बहुत शानदार हैं।"</p>
              <p className="text-end fw-bold">- रामलाल पटेल, भोपाल</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-3 shadow-sm">
              <p className="fst-italic">"यह सेवा केंद्र मेरे गांव के लिए बहुत फायदेमंद रहा है। सभी जरूरतें एक ही जगह पर पूरी हो जाती हैं।"</p>
              <p className="text-end fw-bold">- सीमा देवी, रायसेन</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <h4>📞 किसी भी जानकारी के लिए तुरंत संपर्क करें!</h4>
        <a href="tel:+919876543210" className="btn btn-success btn-lg mt-3">हमें कॉल करें</a>
      </div>
    </div>
  );
};

export default Home;
