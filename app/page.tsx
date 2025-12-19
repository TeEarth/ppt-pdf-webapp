export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h2>เว็บสร้าง PPT และแปลง PDF</h2>

      <h3>งานที่ 1 : สร้าง PPT → รูป</h3>
      <form action="/api/generate-ppt" method="post">
        {[1,2,3,4,5].map(i => (
          <div key={i}>
            <input name={`name${i}`} placeholder={`ชื่อคนที่ ${i}`} />
          </div>
        ))}
        <button>สร้าง PPT</button>
      </form>

      <hr />

      <h3>งานที่ 2 : PDF → รูป</h3>
      <form action="/api/pdf-to-image" method="post" encType="multipart/form-data">
        <input type="file" name="pdfs" multiple accept="application/pdf" />
        <button>แปลง PDF</button>
      </form>
    </main>
  );
}
