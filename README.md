<h1 align="center">
  <br>
  Tasarım Kalıpları
  <br>
</h1>

<h4 align="center">[Project's description]</h4>

![image1](image1.jpg)

<ol>
  <li>
  <a href = '#factory-method'>Factory Method</a>
  </li>
  <li>
  <a href = '#abstract-factory'>Abstract Factory Method</a>
  </li>
  <li>
  <a href = '#builder-method'>Builder Method</a>
  </li>
  <li>Second item</li>
  <li>Third item
    <ol>
      <li>Indented item</li>
      <li>Indented item</li>
    </ol>
  </li>
  <li>Fourth item</li>
</ol>

<p align="center">
  <a href="#about">About</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#faq">FAQ</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#support">Support</a> •
  <a href="#license">License</a>
</p>

## Factory Method

Factory Metodunu bir günlük hayat senaryosu ile açıklamaya çalışacağız. Bir lojistik şirketi için nakliye kamyonlarına ait bir ekosistemi programladığınızı düşünün. Nesne yönelimli kodunuzu "Kamyonet" isimli bir sınıfa(class) göre kurduğumuzu düşünelim. 

İşler iyi gitti ve çalıştığınız şirket aksiyonlarını büyütmeye karar verdi. Artık şirketiniz deniz nakliyesi yapmak amacıyla gemiler ile de çalışıyor. Bu gemileri ekosisteminize dahil etmeniz gerek ama siz kodunuzu "Kamyonet" nesne yönelimli yapınızı kamyonet sınıfı üzerine kurgulamıştınız. Bu durumda gemileri ekosisteminize dahil etmek için kodunuzu değiştirmek zorunda kalacaksınız. Bu durumda kodunuzun esnekliğini kaybedeceksiniz. Belki de binlerce satır kodunuzu değiştirmek ve günlerce hata ayıklamak zorunda kalacaksınız :(

Factory Metodu tam da bu gibi durumlara uygun bir tasarım kalıbıdır. Eğer elinizde sürekli genişleyen veya genişleyebilecek bir ekosistem varsa bu kalıbı kullanabilirsiniz. 


![factory_method_sema_1](./Factory%20Method/sema_1.png)


Factory Metodu bu sorunu çözmek için obje oluşturma işlemlerimizi özel bir sınıfa(class) taşır. Bu sınıfın adı "Fabrika" olabilir. Bu fabrika sınıfı içerisinde obje oluşturma işlemlerimizi gerçekleştiririz. Ama bu işlemi yaparken objelerimizi aynı interface üzerinden türetmeliyiz.

![factory_method_sema_2](./Factory%20Method/sema_2.png)

Yukarıdaki verdiğimiz senaryodaki kişi bu yapımızı en baştan uygulasaydı, nakliye şirketi operasyonlarını büyütmek istediğinde bir sıkıntı yaşamayacaktı. Sadece yeni sınıflar ekleyerek işlerini halledebilirdi. 

##### Factory Method Kullanım Senaryoları

- Eğer kullanacağınız sınıfları önceden tam olarak bilmiyorsanız
- Eğer kullanıcılara geliştirip büyütebilecekleri bir kütüphane veya framework sunmak istiyorsanız
- Sistem kaynaklarından tasarruf etmek ve her seferinde bir sınıfı sıfırdan yazmak istemiyorsanız

! Factory Methodun tek eksiği kodunuzu karmaşıklaştırmasıdır ama bunun dışında çok kullanışlı bir tasarım kalıbıdır.

## Abstract Factory

Abstract Factory Metodu birbirine bağlı olan nesneleri üretmek için kullanılır. Örneğin bir araba üretirken motor ve tekerlekleri de üretmeliyiz. Yani elimizde belirli bir kalıp var. Bu durumda terimsel olarak abstract kelimesini kalıp olarak çevirilebilir.

Metodumuzu yine bir günlük hayat senaryosuyla açıklamaya çalışalım. Bir antika dükkanının satış uygulamasını kodladığınız düşünün. Dükkanda şimdilik Osmanlı ve Viktorya stili mobilyalarımız bulunsun. Bu mobilyaların hepsinin ortak özellikleri var. Bunlar; "Koltuk", "Sandalye" olabilir. Ama bu mobilyaların hepsinin ortak özellikleri dışında farklı özellikleri de var. Örneğin Osmanlı stili koltuklarımızın koltuk kısmı deri olabilir. Viktorya stili koltuklarımızın koltuk kısmı ise kumaş olabilir. Eğer programımızı sadece bu 2 tip mobilyaya göre tasarlamış olsaydık, her yeni mobilya tipi için kodumuzu değiştirmek zorunda kalacaktık. Bu durumda kodumuzun esnekliğini kaybedecektik.

Ayrıca uygulamayı yaparken ekibimizde 2 yazılımcı daha çalıştığını varsayalım. Bu yazılımcılardan birinin müşterilere satış yapılan sayfayı kodladığını diğerinin ise ürünün nakliyesi ile işlemleri kodladığını düşünelim. Bu durumda sınıfların hiyerarşik yapısını kodlamak size ait olacaktır. Projede çalışan diğer yazılımcılar sizden kolay bir kullanım arayüzü, bir nevi API bekleyecektir. Böyle bir senaryoda Abstract Factory Metodu size yardımcı olacaktır.

![abstract_factory_sema_1](./Abstract%20Factory%20Method/sema_1.png)

Abstract Factory Metodu isminden de anlaşılacağı üzere Factory Metodu ile benzerlik gösterir. Factory Metodundan farklı olarak clien'ın (yukarıda verdiğimiz senaryoda diğer yazılımcıların) sadece abstract sınıf ile muhatap olmasını sağlar. Yukarıdaki şemada nakliyeci taşıdığı mobilyaların tipleri ile ilgilenmez. Sadece mobilya sınıfı ile muhatap olur. Bu sayede client'ın kodu daha düzenli olur. Ayrıca yeni bir mobilya tipi eklenmesi durumunda client'ın kodunu değiştirmek zorunda kalmazsınız. Sadece yeni mobilya sınıfını yazmanız yeterli olacaktır. 

Bu metod biraz karışık olduğu için bir örnek daha verelim. Platform bağımsız bir arayüz uygulamamız olsun. Arayüz bileşenlerimiz Windows ve Mac için farklı olabilir. Mesela butonlarımız Windows için 3D, Mac için ise 2D olabilir. Bunlar için ayrı ayrı sınıflar yazmak yerine Abstract Factory Metodu ile tek bir sınıf içerisinde iki farklı sınıfı üretebiliriz. Bu sayede client'ın kodunu değiştirmek zorunda kalmadan yeni bir platform ekleyebiliriz. 

![abstract_factory_sema_2](./Abstract%20Factory%20Method/sema_2.png)


Abstract Factory &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Factory Method
-------|-------------------
Bir dizi benzer ürünleri oluşturmak için kullanılabilir. Örneğin bir otomobil üreticisi, farklı otomobil modelleri oluşturmak için abstract factory kullanır. | Bir ürün sınıfının alt sınıflarını oluşturmak için kullanılır. Örneğin bir otomobil üreticisi, aynı otomobil modelinin farklı tasarımlarını oluşturmak için kullanır.
Sınıf yapısı daha kapsamlıdır. | Genellikle tek metot içerir.
Daha az özelleştirilebilir bir yapıya sahiptir çünkü belirli bir kalıba bağlıdır. | Daha fazla özelleştirme imkanı sunar.

## Builder Method

Builder metodu bir nesnenin oluşturulması sırasında aşamaları açıkça ayırır ve bu şekilde nesne oluşturma işlemini daha okunaklı ve anlaşılır bir kod yapısına döker. Aynı nesne oluşturma kalıbını kullanarak birçok farklı tipte objeler üretmenizi sağlar.

'Ev' isimli bir nesne kodladığınızı düşünün. 'Ev' nesnesinin pencereSayısı, odaSayısı, katSayısı, çiftKatlıMı, garajıVarMı, havuzuVarMı, BahçesiVarMı, DoğalGazBağlıMı ... gibi birçok özelliği vardır. Bu nesneyi oluştururken fark edeceksiniz ki constructor fonksiyonunuz çok uzun ve karmaşık bir hal almış yani 'Telescoping Constructor' probleminden muzdaripsiniz. Kodu siz yazdığınız halde sizin bile yeni bir ev nesnesi tanımlarken kafanız karışıyor.

![builder_sema_1](./Builder%20Method/sema_1.png)

Builder metodu bu karmaşıklığı önlemede size yardımcı olacaktır. Çalışma metodu olarak nesne oluşturma işlemini aşamalara bölme prensibini benimser. Bu aşamaları birer fonksiyon olarak tanımlar ve bu fonksiyonları kullanarak nesneyi oluşturur. Bu sayede nesne oluşturma işlemini daha okunaklı ve anlaşılır bir kod yapısına döker. Aynı nesne oluşturma kalıbını kullanarak birçok farklı tipte objeler üretmenizi sağlar.

![builder_sema_2](./Builder%20Method/sema_2.png)

Builder metodu, 'Single Responsibility' prensibine uygun bir tasarım desenidir. Nesneyi oluştururken kompleks adımları birbirinden ayırırız ve her adımdan sorumlu tek bir fonksiyon tanımlarız.

## About

Simple overview of use/purpose.

## Key Features

- Feature 1
- Feature 2
  - Feature 2.1
  - Feature 2.2
- Feature 3

## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm

### Installing and Running

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

```bash
# Clone this repository
$ git clone https://github.com/[your-github-user]/[your-repository-name]

# Go into the repository
$ cd [your-repository-name]
```

## FAQ

### Is it any good?

[yes.](https://news.ycombinator.com/item?id=3067434)

## Roadmap

- [x] Add this README.
- [ ] Finish the unicorn project.

## Emailware

[Project's name] is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <your-email@email.com> about anything you'd want to say about this software. I'd really appreciate it!

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

You can also support us by:

<p align="left">
  <a href="https://www.buymeacoffee.com" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a> &nbsp &nbsp
  <a href="https://www.patreon.com">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
  </a>
</p>

## License

Your license here.

## Acknowledgments

Inspiration, code snippets, etc.

- [Markdownify's README](https://github.com/amitmerchant1990/electron-markdownify#readme)

## You may also like...

List of apps or libs that do similar stuff as your project.

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Simple README.md template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

---

> [abehidek.me](https://abehidek.me) &nbsp;&middot;&nbsp;
> GitHub [@abehidek](https://github.com/abehidek) &nbsp;&middot;&nbsp;
> Twitter [@guilhermehabe](https://twitter.com/guilhermehabe)
