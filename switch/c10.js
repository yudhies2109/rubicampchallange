let bahasa = "jp";

// console.log(bahasa.toUpperCase(bahasa));

switch (bahasa.toUpperCase()) {
  case "EN":
    console.log("Language: English");
    console.log("Welcome! How can we help you today?");
    break;

  case "ID":
    console.log("Language: Bahasa Indonesia");
    console.log("Selamat Datang! Apa yang bisa saya bantu?");
    break;

  case "JP":
    console.log("Language: Japanese");
    console.log("Selamat Datang! Apa yang bisa saya bantu?");
    break;

  case "KR":
    console.log("Language: Korean");
    console.log("Selamat Datang! Apa yang bisa saya bantu?");
    break;

  default:
    console.log("Language not supported");
    break;
}
