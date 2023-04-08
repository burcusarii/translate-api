# API Translate Uygulaması

<hr>

#### Bu repoda fetch api ile ücretsiz bir translation api'ı olan NLP Translation API üzerinden veriler çekilerek bir çeviri arayüzü yapılmıştır.

#### fetch() metodu ve NLP API üzerinden oluşturmuş olduğumuz api-key ile get request oluşturulur ve veriler alınır.

#### Ayrıca dillerin isimleri ve standart kısaltmaları language.json dosyası üzerinden yine fetch() metodu ve get request ile alınarak dil seçeneklerine eklenmiştir. 

#### Proje'yi indirdikten sonra çalıştırmak için aşağıdaki js dosyasını eklemeniz gerekmektedir;

dosya uzantısı config.js

Dosya içeriği;

const config = {
    my_key: "buraya NLP API Key'inizi giriniz."
}
