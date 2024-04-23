import config from "@config/config.json";
// import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import FormfacadeEmbed from "@formfacade/embed-react";


const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section">
      {/* <Banner title={title} /> */}
      <div className="container">
        <div className="row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <FormfacadeEmbed
              formFacadeURL="https://formfacade.com/include/110581543394745721401/form/1FAIpQLSf9CcdFqatlkemHaoPGgagylWADfrJGC7-IOjnTtIurg4MqSg/classic.js/?div=ff-compose"
              onSubmitForm={() => console.log('Form submitted')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
