"use client";

import { Sign } from "crypto";
import { useState } from "react";

export default function Home() {
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [image, setImage] = useState<File | null>(null);


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("confirm", confirm ? "true" : "false");
    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("/api/save-data", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert("Gửi dữ liệu thành công!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Xác nhận thông tin</h2>

      <label>Số điện thoại:</label>
      <input
        className="border p-2 w-full"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className="block mt-4">
        <input
          type="checkbox"
          onChange={(e) => setConfirm(e.target.checked)}
        />{" "}
        Tôi đã nhận hàng
      </label>

      <label className="block mt-4">Ảnh / chụp hình:</label>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-3 mt-6 w-full"
      >
        Gửi thông tin
      </button>
    </div>
  );
}
