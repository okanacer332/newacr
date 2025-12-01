import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "1. Analiz & Planlama",
    desc1: "Sürecimiz sizi dinlemekle başlar. Proje gereksinimlerinizi, hedeflerinizi ve mevcut durumunuzu detaylıca analiz ederiz.",
    desc2: "Size özel en doğru stratejiyi belirler ve sürprizlere yer bırakmayan net bir yol haritası çıkarırız.",
    image: "/images/features/features-light-01.svg",
    imageDark: "/images/features/features-dark-01.svg",
    buttonLabel: "Sıradaki: Tasarım",
    nextTabId: "tabTwo",
  },
  {
    id: "tabTwo",
    title: "2. Tasarım & Sunum",
    desc1: "Analizler doğrultusunda ilk draft (taslak) çalışmalarımızı hazırlar ve size sunarız. Fikirlerin görselleştiği aşamadır.",
    desc2: "Geri bildirimlerinizi alarak tasarıma son şeklini verir ve onayınızla geliştirme sürecine hazır hale getiririz.",
    image: "/images/features/features-light-02.svg",
    imageDark: "/images/features/features-dark-02.svg",
    buttonLabel: "Sıradaki: Geliştirme",
    nextTabId: "tabThree",
  },
  {
    id: "tabThree",
    title: "3. Geliştirme & Destek",
    desc1: "Onaylanan tasarımı iteratif bir şekilde kodlar, test eder ve canlıya alırız. Ancak işimiz bitmez.",
    desc2: "Proje tesliminden sonra da bakım ve teknik destek hizmetlerimizle ürününüzün her zaman güncel kalmasını sağlarız.",
    image: "/images/features/features-light-03.svg",
    imageDark: "/images/features/features-dark-03.svg",
    buttonLabel: "Bakım Anlaşması Yap", // Contact CTA
    nextTabId: "contact",
  },
];

export default featuresTabData;