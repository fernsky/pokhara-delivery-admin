import Image from "next/image";

export function ReportCoverPage() {
  const currentYear = new Date().getFullYear();
  const nepaliYear = currentYear + 56; // Convert to Nepali year (BS)

  return (
    <div
      className="cover-page"
      style={{
        width: "210mm",
        height: "297mm",
        minWidth: "210mm",
        minHeight: "297mm",
        maxWidth: "210mm",
        maxHeight: "297mm",
        background: "white",
        margin: "0 auto",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "white",
          padding: "0 2cm",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2cm",
            marginTop: "2cm",
            background: "white",
          }}
        >
          {/* Pokhara Logo (left) */}
          <Image
            src="/images/pokhara_logo.png"
            alt="Pokhara Logo"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
          <div style={{ flexGrow: 1, background: "white" }}>
            <div
              style={{
                color: "#1e3a8a",
                fontSize: "20pt",
                fontWeight: 700,
                marginBottom: "0.5em",
                background: "white",
              }}
            >
              पोखरा महानगरपालिका
            </div>
            <div
              style={{
                color: "#1e40af",
                fontSize: "16pt",
                fontWeight: 600,
                marginBottom: "0.5em",
                background: "white",
              }}
            >
              पोखरा महानगरपालिकाको कार्यालय
            </div>
            <div
              style={{
                color: "#1e40af",
                fontSize: "12pt",
                marginBottom: "0.5em",
                background: "white",
              }}
            >
              पोखरा, कास्की, गण्डकी प्रदेश
            </div>
          </div>
          {/* Nepal Coat of Arms (right) */}
          <Image
            src="/images/coat_of_arms.png"
            alt="Nepal Coat of Arms"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Main Title Section */}
        <div
          style={{
            color: "#dc2626",
            padding: "1em",
            margin: "1.5cm 0 0.5cm 0",
            fontSize: "24pt",
            fontWeight: 700,
            background: "white",
          }}
        >
          महानगरपालिकाको पार्श्वचित्र
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#1e40af",
            fontSize: "18pt",
            fontWeight: 600,
            marginBottom: "1cm",
            background: "white",
          }}
        >
          डिजिटल प्रोफाइल प्रतिवेदन
        </div>

        {/* Bottom Section with publication info */}
        <div
          style={{
            color: "#0f172a",
            padding: "1em 0 0 0",
            marginTop: "1cm",
            background: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <div
            style={{ fontSize: "16pt", fontWeight: 600, background: "white" }}
          >
            मस्यौदा प्रतिवेदन
          </div>
          <div
            style={{ fontSize: "18pt", fontWeight: 700, background: "white" }}
          >
            {nepaliYear}
          </div>
          <div
            style={{ fontSize: "10pt", color: "#64748b", background: "white" }}
          >
            प्रकाशन मिति: {nepaliYear} फागुन
          </div>
          <div
            style={{ fontSize: "10pt", color: "#64748b", background: "white" }}
          >
            संस्करण: १.०
          </div>
        </div>
      </div>
    </div>
  );
}
