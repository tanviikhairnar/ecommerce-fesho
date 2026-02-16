const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={44} />
      </div>

      <div className="service-text">
        <h5>{service.title}</h5>
        <p>{service.subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

