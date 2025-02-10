const conversionRates = {
    tahun: 31536000,
    bulan: 2628000,
    minggu: 604800,
    hari: 86400,
    jam: 3600,
    menit: 60,
    detik: 1,
  }
  
  const inputValue = document.getElementById("inputValue")
  const inputUnit = document.getElementById("inputUnit")
  const convertBtn = document.getElementById("convertBtn")
  const resultsDiv = document.getElementById("results")
  
  function convert() {
    const value = Number.parseFloat(inputValue.value)
    const unit = inputUnit.value
  
    if (isNaN(value)) {
      resultsDiv.innerHTML = "<p>Masukkan angka yang valid.</p>"
      return
    }
  
    const seconds = value * conversionRates[unit]
    resultsDiv.innerHTML = ""
  
    for (const [targetUnit, rate] of Object.entries(conversionRates)) {
      const convertedValue = (seconds / rate).toFixed(2)
      const resultItem = document.createElement("div")
      resultItem.className = "result-item"
      resultItem.innerHTML = `<span>${targetUnit.charAt(0).toUpperCase() + targetUnit.slice(1)}:</span> <span>${convertedValue}</span>`
      resultsDiv.appendChild(resultItem)
    }
  }
  
  // Hanya menjalankan konversi saat tombol ditekan
  convertBtn.addEventListener("click", convert)
  
  // Menghapus event listener untuk input dan perubahan unit
  // inputValue.addEventListener('input', convert);
  // inputUnit.addEventListener('change', convert);
  
  // Opsional: Menambahkan event listener untuk tombol Enter pada input
  inputValue.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      convert()
    }
  })
  
  