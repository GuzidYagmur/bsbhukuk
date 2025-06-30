"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqContent = {
  title: "Sıkça Sorulan Sorular",
  items: [
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Ev Sahibi Kiracıyı Hangi Durumlarda Evden Çıkarabilir?",
      answer:
        "Ev sahibi hangi şartlarda kiracıyı çıkarabilir? Yeniden kullanım, tahliye taahhüdü, ödenmeyen kira gibi tüm nedenleri görün.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "İş Kazası Geçirdim, Ne Yapmalıyım?",
      answer:
        "İş kazasında rapor, tazminat, SGK başvurusu ve işverene karşı dava haklarınızı öğrenmek için rehber niteliğinde bir içerik.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Eşimden Boşanmak İstiyorum, Nereden Başlamalıyım?",
      answer:
        "Anlaşmalı ya da çekişmeli boşanma için deliller toplayın, dava açmadan önce strateji belirleyin.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Çocuğun Velayeti Kimde Kalır? (Anne mi Baba mı?)",
      answer: "Velayet çocuğun üstün yararına göre belirlenir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Hakkımda İcra Takibi Başlamış, Ne Yapabilirim?",
      answer: "İcra takibine 7 gün içinde itiraz edebilirsiniz.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Sosyal Medyada Hakaret ve Tehdit: Ne Yapabilirim?",
      answer:
        "Yorum, DM ya da hikâyelerde hakaret-tehdit suçtur. Bir avukatla iletişime geçiniz.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Adli Sicil Kaydım Var, Nasıl Sildirebilirim?",
      answer:
        "Ceza infaz edildiyse ve belli süreler geçtiyse kaydın silinmesi mümkündür.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "İşten Haksız Yere Çıkarıldım, Tazminat Alabilir miyim?",
      answer:
        "Geçerli neden olmadan çıkarıldıysanız kıdem ve ihbar tazminatına hak kazanırsınız.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Mal Paylaşımı Davası Nasıl Açılır?",
      answer: "Boşanma sonrası edinilmiş malların paylaşımı için dava açılır.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Hakkımda Suç Duyurusu Yapılmış, Ne Yapmalıyım?",
      answer:
        "Savcılıktan ifade çağrısı gelirse avukatla birlikte hareket edin.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Savcılıktan Çağrı Kâğıdı Geldi, Ne Anlama Geliyor?",
      answer:
        "Hakkınızda soruşturma açıldığını ve ifade vermeniz gerektiğini gösterir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Hakaret Suçu Nedir? Hangi Kelimeler Suç Sayılır?",
      answer:
        "Bir kişiye yönelik onur kırıcı sözler hakaret suçunu oluşturabilir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Sosyal Medyada Biri Beni Tehdit Etti, Ne Yapabilirim?",
      answer: "Tehdit içerikli mesaj, yorum ve DM'ler suçtur.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Cinsel Taciz Suçu Nedir? Mesajla Taciz Suç Olur mu?",
      answer:
        "Fiziksel ya da dijital ortamda rahatsız edici davranışlar cinsel taciz sayılabilir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "İftira Suçuna Maruz Kaldım. Kendimi Nasıl Savunabilirim?",
      answer:
        "Gerçek dışı beyanlarla suçlanıyorsanız iftiraya uğramış olabilirsiniz.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "İddianame Ne Demek? Hakkımda Dava Açıldıysa Ne Yapmalıyım?",
      answer: "Savcılıkça hazırlanan iddianameyle dava açılmış demektir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Hakkımda Darp Suçlaması Var. Ne Yapmalıyım?",
      answer: "Avukatsız ifade vermek zorunda değilsiniz.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Hakkımda Darp Suçlaması Var. Ne Yapmalıyım?",
      answer:
        "Darp suçlamasıyla karşılaştıysanız olayın tüm yönlerini belgeleyin.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Uzaklaştırma Kararı Ne Demek? İhlal Edersem Ne Olur?",
      answer:
        "Mahkemece verilen uzaklaştırma kararına uymazsanız cezai yaptırımlarla karşılaşırsınız.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Sahte Profil Açmak Suç mu? Ceza Alır mıyım?",
      answer:
        "Başkasının adıyla sosyal medya hesabı açmak özel hayatın gizliliğini ihlal eder.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Uyuşturucu Bulundurmak Suç mu? Ceza Alır mıyım?",
      answer: "Uyuşturucu madde bulundurmak suçtur.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Şikayetimi Geri Çektim, Dava Düşer mi?",
      answer: "Takibi şikâyete bağlı suçlarda dava düşebilir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question:
        "Adli Kontrol Nedir? Yurt Dışına Çıkma Yasağını Nasıl Kaldırabilirim?",
      answer:
        "Yurt dışı çıkış yasağı adli kontrol kapsamındaysa hâkim kararıyla kaldırılabilir.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "HAGB Nedir? Sabıkaya İşler mi? Ne Zaman Silinir?",
      answer:
        "HAGB kararı kesinleşirse sabıka kaydına geçmez, denetim süresi sonrası düşer.",
    },
    {
      image: {
        src: "/images/question.svg",
        width: 20,
        height: 20,
      },
      question: "Yeni Yargı Paketi ve Af Düzenlemesi Kimleri Kapsıyor?",
      answer:
        "2025 yargı paketiyle ceza indirimi ve infaz kolaylıkları geliyor, af kapsamı sınırlı.",
    },
  ],
};
const FAQ = () => {
  const data = faqContent;

  if (!data) return;

  return (
    <section className="py-16 md:py-20 px-0">
      <div className="max-w-[1000px] mx-auto px-5">
        {data.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-[2rem] md:text-[2.5rem] leading-[1.3] !item-dark text-center max-w-[400px] mx-auto !mb-[5.5rem] font-serif font-bold"
          >
            {data.title}
          </motion.h2>
        )}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.items.map((item, index) => {
            let delay = index;
            delay *= 0.05;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: delay, duration: 0.5 },
                }}
                viewport={{ once: true }}
                key={index}
                className="flex"
              >
                <span className="grow-0 shrink-0 basis-[50px] w-[50px] h-[50px] bg-primary rounded-full flex justify-center items-center mr-[30px]">
                  <Image
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt="Question icon"
                    className="!w-3"
                  />
                </span>
                <div>
                  <h3 className="mb-5 font-bold font-serif text-xl text-dark">
                    {item.question}
                  </h3>
                  <p className="text-gray mb-0">{item.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
