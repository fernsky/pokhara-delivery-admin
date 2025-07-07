import Image from "next/image";

export function ReportCoverPage() {
  const currentYear = new Date().getFullYear();
  const nepaliYear = currentYear + 56; // Convert to Nepali year (BS)

  return (
    <div className="cover-page" style={{ background: "white" }}>
      <div
        style={{
          textAlign: "center",
          marginBottom: "4cm",
          background: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2cm",
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
            padding: "1.5em",
            margin: "2cm 0",
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

        {/* Bottom Section */}
        <div
          style={{
            color: "#0f172a",
            padding: "1em",
            marginTop: "1cm",
            background: "white",
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
        </div>
      </div>

      {/* Publication Info */}
      <div
        style={{
          position: "absolute",
          bottom: "2cm",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: "10pt",
          color: "#64748b",
          background: "white",
        }}
      >
        <div style={{ background: "white" }}>
          प्रकाशन मिति: {nepaliYear} फागुन
        </div>
        <div style={{ background: "white" }}>संस्करण: १.०</div>
      </div>
    </div>
  );
}
