/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ToolbarRenderer");jQuery.sap.require("sap.ui.core.Renderer");sap.m.ToolbarRenderer={};
sap.m.ToolbarRenderer.render=function(r,c){if(!c.getVisible()){return}r.write("<div");r.writeControlData(c);r.addClass("sapMTB");if(!c.hasFlexBoxSupport){r.addClass("sapMTBNoFlex")}else if(!c.hasNewFlexBoxSupport){r.addClass("sapMTBOldFlex")}else{r.addClass("sapMTBNewFlex")}if(c.getActive()){r.addClass("sapMTBActive");r.writeAttribute("tabindex","0")}else{r.addClass("sapMTBInactive");r.writeAttribute("tabindex","-1")}var w=c.getWidth();var h=c.getHeight();w&&r.addStyle("width",w);h&&r.addStyle("height",h);r.writeClasses();r.writeStyles();r.write(">");c.getContent().forEach(function(C){r.renderControl(C)});r.write("</div>")};
