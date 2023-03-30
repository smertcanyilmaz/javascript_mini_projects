You can view the project here [Click Me](https://smybudget.netlify.app)

// YAŞADIĞIM SORUN newChecker fonsiyonunda. Buradaki temel amacım şuydu;

// bir harcama add expense butonunu ile expense title ve expense value altına listelenir ve budget, expenses ve balance otomatik güncellenir. buraya kadar ki her şey sorunsuz çalışıyor. örneğin;

// Please Enter Your Expense : bulaşık deterjanı
// Please Enter Expense Amount : 20

// sorun ise halihazırda listelenmiş bir expanse value başlığı altındaki inputu editlemek ve akabinde check etmek istediğimde ortaya çıkıyor. edit tuşuna basıyorum ve yeni Expense Amount değerini yazıyorum. örneğin yeni değer 25 olsun. benim newChecker() fonsiyonu ile yapmaya çalıştığım şey ise 25 - 20 yapıp yeni değeri expenses ve balance da güncellemekti. ancak şöyle bir problem oldu. ilk girilen değerler işlemi yaparken ikinci değerlerde sorun ortaya çıktı. örnek ile netleştireyim:

// Please Enter Expense Amount : 25  ------> let exp = [25]

// daha sonra add expense diyoruz input expense value altına gidiyor. edite tıklıyoruz ve yeni değeri giriyoruz ve check ikonuna tıklıyoruz : 20 ----> let numbers = [20];

// let result = [5];

//  bu sefer işlemi farklı harcamalarla devam ettiriyoruz örneğin;
// // Please Enter Your Expense : halı
// Please Enter Expense Amount : 500 add expense diyip listeliyoruz, edit yapıp yeni değer giriyoruz örneğin: 600 ve check ikonuna tıklıyoruz.

// işte bu noktada fonsiyon çalışmıyor. her zaman default olarak ilk inputu kendisine çıkarılacak exp değer olarak kabul ediyor. console'da durum şöyle bekleniyor/gerçekleşiyor:
// beklenen: let exp = [25, 500] let numbers = [20, 600]; let result = [5, 100];
// gerçekte çıkan sonuç = let exp = [25, 600] let numbers = [20, 20]; let result = [5, 5, 580]; (neden resultta 3 tane eleman var hiçbir fikrim yok)
// kısacası benim listelenen inptularımının ilki dışında expense value altında listelenen diğer inputları tanımlanmıyor. ben bu sorunu nasıl çözebilirim ve değerleri olması gertiği gibi nasıl yazabilirim? benim aklıma ilk gelen array ile yapmaktı reduce gibi methodları da denedim ama çalıştıramadım.

//NOT: Please Enter Expense Amount'da girilen değerin exp arrayine pushlandığı satır:  112. satır exp.push(expenses);
