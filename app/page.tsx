export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h2>ระบบสร้าง PPT และแปลง PDF</h2>

      <h3>งานที่ 1 : สร้าง PPT → รูป</h3>
      <form
        action="https://YOUR-BACKEND-URL/generate-ppt"
        method="post"
        encType="multipart/form-data"
      >
        {[1,2,3,4,5].map(i => (
          <input key={i} name={`name${i}`} placeholder={`ชื่อคนที่ ${i}`} />
        ))}
        <button>สร้าง PPT</button>
      </form>

      <hr />

      <h3>งานที่ 2 : PDF → รูป</h3>
      <form
        action="https://YOUR-BACKEND-URL/pdf-to-image"
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="pdfs" multiple />
        <button>แปลง PDF</button>
      </form>
    </main>
  );
}
