module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "DESCONFERÊNCIA OPEN AIR",
      description: "Conference description",
      date: "31 de Janeiro",
      // If your event is free, just comment this line
      venue: "Parque Vicentina Aranha",
      address: "Rua Prudente M Moraes, 302",
      city: "São José dos Campos",
      state: "São Paulo"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscreva-se!",
        link: "http://goo.gl/forms/UJbBmQTSp7"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    forkButton: {
        repository: "https://github.com/desconferencia-sjc/desconferencia-sjc.github.io"
    },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://desconferencia-sjc.github.io/",
      googleanalytics: "UA-54979785-2"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      // 'speakers',
      // 'schedule',
      // 'sponsors',
      // 'partners'
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Sobre",
      location: "Localização",
      // speakers: "Speakers",
      // schedule: "Schedule",
      // sponsors: "Sponsors",
      // partners: "Partners",
      contact: "Contato"
    },


    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};