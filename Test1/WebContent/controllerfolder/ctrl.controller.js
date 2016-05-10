sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"] , 
	function(Controller, MessageToast, JSONModel)
	{
	    
		"use strict";
		return Controller.extend("sap.ui.demo.wt.controllerfolder.ctrl", 
		{
		    
			onShowHello: function()
			{
				MessageToast.show("Hello World");
			},
			

			
			startopening: function()
			{
			    
			    var i,a = 45;
			    i=1;
			    
			        var oEle;
			        
			        oEle = document.getElementsByClassName("testpanel")[0];
			    
			    
			    
			    
			  var timer; 
			  if((oEle.parentElement.getBoundingClientRect().left < oEle.getBoundingClientRect().left) && 
			        (oEle.parentElement.getBoundingClientRect().right < oEle.getBoundingClientRect().right))
			        {
			  timer = setInterval(function(){
			
			    
			    
			        
			        //a = oEle.getBoundingClientRect().right;
			        oEle.style.right = a + i + "px";
			        i = i + 4;
			        if((oEle.parentElement.getBoundingClientRect().left >= oEle.getBoundingClientRect().left) || 
			        (oEle.parentElement.getBoundingClientRect().right >= oEle.getBoundingClientRect().right))
			        {
			           clearInterval(timer);
			        }
			    
			    //document.getElementById("P1").style.right = a + "px";
			    
			},1);
			        }
			        else
			        {
			            a = oEle.style.right.replace("px","");
			            	 
			            	  timer = setInterval(function(){
			        
			        oEle.style.right = a - i + "px";
			        i = i + 4;
			        if( (a - i) <= 47)
			        {
			           clearInterval(timer);
			        }
			    
			    //document.getElementById("P1").style.right = a + "px";
			    
			},1);
			            
			        }
			
			
			},
			
			
			
			onInputValidationError : function(oEvent){
			oEvent.getSource().setValue(oEvent.getParameter("oldValue"));
			},
			
			onInit : function () {
                // set data model on view
                var oData = {
                recipient : {
                    name : "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            }
			
			
		});
	});