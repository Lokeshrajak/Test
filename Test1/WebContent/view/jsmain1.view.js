sap.ui.jsview("sap.ui.demo.wt.view.jsmain1", {  // this is View file
   
   getControllerName: function() {
      return "sap.ui.demo.wt.controllerfolder.main1";     // the Controller lives here
   },

   createContent: function(oController) {
      var oPanel = new sap.ui.layout.VerticalLayout({width:"100%"});
      var oText = new sap.m.Text({text:"Lorem ipsum dolor st amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"});
      var oXmlView = new sap.ui.core.mvc.XMLView({viewName:"sap.ui.demo.wt.view.App"});
      oPanel.addContent(oText);
      oPanel.addContent(oXmlView);
      oPanel.addStyleClass("testcontent");
      return oPanel;
      //oButton.attachPress(oController.handleButtonClicked);
      //return oButton;
   }

});