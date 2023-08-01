import "./ServiceCardList.css";
import ServiceCard from "../services-card/ServiceCard";
import Header from "../header/Header";

function ServiceCardList() {
  return (
    <div className="services">
        <Header text="Hizmetlerimiz"/>
        <div className="card-list">
        <ServiceCard data={{img:  "./asset/icon/chronometer.png", title: "Hızlı", text: "Yaratıcı tasarım anlayışıyla, işinde uzman ekibimizle hızlı ve özenli hizmet sunuyoruz, hayalinizdeki mekânı anında gerçeğe dönüştürüyoruz!"}}></ServiceCard>
        <ServiceCard data={{img: "./asset/icon/reliability.png", title: "Güvenilir", text: "Güvenilir ve deneyimli ekibimizle, her adımda müşterilerimize özenle ve güvenle hizmet veriyor, mekânlarınızı hayallerinizin ötesine taşıyoruz."}}></ServiceCard>
        <ServiceCard data={{img: "./asset/icon/interior-design.png", title: "Zarif", text: "Zarafet ve estetikle harmanlanmış hizmet anlayışımızla, mekânlarınıza özgün dokunuşlar ekleyerek unutulmaz bir deneyim sunuyoruz."}}></ServiceCard>
        </div>
      </div>
  );
}

export default ServiceCardList;