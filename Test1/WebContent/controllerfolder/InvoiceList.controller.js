sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"] , 
	function(Controller, MessageToast, JSONModel)
	{
	    
		"use strict";
		return Controller.extend("sap.ui.demo.wt.controllerfolder.InvoiceList", 
		{
			
			onInit : function () {
                // set data model on view
                var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            
            //var oConfig = this.getMetadata().getConfig();
            //var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
            var oInvoiceModel = new sap.ui.model.json.JSONModel("model/invoices.json");
            this.getView().setModel( oInvoiceModel, "invoice");
            }
			
			
		});
	});