import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4 text-center text-success fw-bold">📞 हमसे संपर्क करें</h1>

      <div className="row g-4">

        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="mb-3">📞 संपर्क विवरण</h4>
            <p><strong>नाम:</strong> Gour Krishi Seva Kendra</p>

            <p>
              <a href="tel:+919630258473" className="btn btn-success w-100 mb-2">
                📞 हमें कॉल करें
              </a>
            </p>

            <p>
              <a href="https://wa.me/9630258473" target="_blank" rel="noopener noreferrer" className="btn btn-success w-100 mb-2">
                💬 WhatsApp पर बात करें
              </a>
            </p>

            <p>
              <a href="sajidmansuri9630@gmail.com" className="btn btn-primary w-100 mb-2">
                ✉️ ईमेल भेजें
              </a>
            </p>

            <p>
              <a href="https://maps.app.goo.gl/ZkmXNvJbPCVAofUF8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-100">
                📍 लोकेशन देखें
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4 className="mb-3">📝 मैसेज भेजें</h4>
            <form>
              <div className="mb-3">
                <label className="form-label">आपका नाम</label>
                <input type="text" className="form-control" placeholder="नाम लिखें" required />
              </div>

              <div className="mb-3">
                <label className="form-label">ईमेल</label>
                <input type="email" className="form-control" placeholder="ईमेल लिखें" required />
              </div>

              <div className="mb-3">
                <label className="form-label">संदेश</label>
                <textarea className="form-control" rows="4" placeholder="अपना संदेश लिखें" required></textarea>
              </div>

              <button type="submit" className="btn btn-success w-100">
                भेजें
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
