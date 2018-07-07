'use strict';
function empty() {
    return "";
}
function DropDownList() {
    let defaultClass="DefaultDropDownList",
        defaultValueClass="DefaultValue",
        defaultItemsClass="DefaultItemsContainerHidden",
        defaultSingleItemClass = "DefaultSingle",
        defaultItemsAlternate="DefaultItemsContainer",
        defaultValue="Select an item",
        defaultSearchContainerClass="DefaultSearchContainer",
        defaultSearchClass="DefaultSearch",
        defaultNoResultMessage = "No element found",
        defaultNoResultClass="DefaultNoResult",
        defaultSearchHolder="Search";
    this.ParentName;
    this.ClassName=defaultClass;
    this.ValueClass=defaultValueClass
    this.ItemsClass=defaultItemsClass;
    this.SingleItemClass=defaultSingleItemClass;
    this.Items=new Array();
    this.Value=defaultValue;
    this.NoResultMessage=defaultNoResultMessage;
    this.NoResultClass=defaultNoResultClass;
    this.ItemsAlternateClass=defaultItemsAlternate;
    this.SearchContainerClass=defaultSearchContainerClass;
    this.SearchClass=defaultSearchClass;
    this.SearchHolder=defaultSearchHolder
    var thisAdress = this;
    //Methods
    this.create=function () {
        var container= document.createElement('div'),
            value=document.createElement('div'),
            searchContainer=document.createElement('div'),
            search=document.createElement('input'),
            items=document.createElement('div'),
            noResult=document.createElement('div'),
            linkStylesheet=document.createElement('link'),
            itemsClassHidden=this.ItemsClass, itemsClass=this.ItemsAlternateClass,
            father = document.querySelector(this.ParentName);
        searchContainer.className=this.SearchContainerClass;
        items.appendChild(searchContainer);
        search.type="text";
        search.className=this.SearchClass;
        search.placeholder=this.SearchHolder;
        searchContainer.appendChild(search);
        for (var i = 0; i < this.Items.length; i++) {
            var singleItem = document.createElement('div');
            singleItem.textContent=this.Items[i];
            singleItem.className=this.SingleItemClass;
            singleItem.onclick=function() {
                value.textContent=this.textContent;
                items.className=itemsClassHidden;
            };
            items.appendChild(singleItem);
        }
        linkStylesheet.rel="stylesheet";
        linkStylesheet.href="/WebCompoJS/DropDownList/DropDownList.css";
        document.head.appendChild(linkStylesheet);
        value.className=this.ValueClass;
        value.textContent=this.Value;
        container.appendChild(value);
        items.className=itemsClassHidden;
        container.appendChild(items);
        container.className=this.ClassName;
        father.appendChild(container);
        value.onclick= function () {
            if(items.className==itemsClassHidden){
                items.className=itemsClass;
            }else{
                items.className=itemsClassHidden;
            }
        };
        search.onchange = function () {
            var searchValue=search.value,Result=new Array(),existe=false;
            if(searchValue!=empty()){
                for (var i = 0; i < thisAdress.Items.length; i++) {
                    if(thisAdress.Items[i].includes(searchValue,0)){
                        Result.push(thisAdress.Items[i]);
                        existe=true;
                    }
                }
                if (existe==true){
                    if (items.contains(noResult)){items.removeChild(noResult);}
                    var single=document.querySelectorAll("."+thisAdress.SingleItemClass);
                    for (var i = 0; i < single.length; i++) {
                        single[i].parentNode.removeChild(single[i]);
                    }
                    for (var i = 0; i < Result.length; i++) {
                        var singleItem = document.createElement('div');
                        singleItem.textContent=Result[i];
                        singleItem.className=thisAdress.SingleItemClass;
                        singleItem.onclick=function() {
                            value.textContent=this.textContent;
                            items.className=itemsClassHidden;
                        };
                        items.appendChild(singleItem);
                    }
                }else{
                    var single=document.querySelectorAll("."+thisAdress.SingleItemClass);
                    for (var i = 0; i < single.length; i++) {
                        single[i].parentNode.removeChild(single[i]);
                    }
                    noResult.className=thisAdress.NoResultClass;
                    noResult.textContent=thisAdress.NoResultMessage;
                    items.appendChild(noResult);
                }
            }else{
                if (items.contains(noResult)){items.removeChild(noResult);}
                var single=document.querySelectorAll("."+thisAdress.SingleItemClass);
                for (var i = 0; i < single.length; i++) {
                    single[i].parentNode.removeChild(single[i]);
                }
                for (var i = 0; i < thisAdress.Items.length; i++) {
                    var singleItem = document.createElement('div');
                    singleItem.textContent=thisAdress.Items[i];
                    singleItem.className=thisAdress.SingleItemClass;
                    singleItem.onclick=function() {
                        value.textContent=this.textContent;
                        items.className=itemsClassHidden;
                    };
                    items.appendChild(singleItem);
                }
            }
        };
    };
}