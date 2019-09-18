class Zone{
    constructor({size={width:0,height:0}, type='zone', position = {top:0,left:0}}={}){
        this.$zone= null;
        this.$zoneAddOnContainer = $('<div></div>')
        this.type = type;
        this.size = size;
        this.position = position;
        console.log(this.size)
        this.backgroundColor = 'rgb(255, 119, 119)';
        this.identificator = null;
        this.location=null;
    }

    create({id=this.id,position=this.position,color=this.backgroundColor,size=this.size}={}){
        this.$zone =  $('<div></div>');
        this.$zone.css("position","absolute");
        this.$zone.addClass("zone");
        this.setSize(size);
        this.setColor(color);
        this.setPosition(position)
        this.setIdentificator(id)
    }

    delete(){
        this.$zone.remove();
    }

    setZIndex(zIndex){
        this.zIndex = zIndex;
        this.$zone.css('z-index', zIndex);
    }

    attachToTemplate(template){
        template.zones[this.identificator]=this;
    }

    setIdentificator(id){
        this.identificator = id
        this.name = "zone-"+id
        this.$zone.attr("id",this.name)
    }

    appendIt(location = this.location){
        if(location !== null)this.location.append(this.$zone)
    }

    setLocation(location,append=false){
        if(typeof append !== 'boolean')return console.log('Mauvais typage')
        this.location = location;
        if(append)this.appendIt()
    }

    createNewZone(position,size){
        let newZone =  $('<div></div>');
        for(let i=0; i<=this.zones.length+1;i++){
            if(!i in this.zones)this.zones[i]=newZone
        }
        newZone.css('position','absolute');



        console.log(newZone)
        newZone.addClass('zone');
        newZone.css    ({top:position.top,left:position.left});
        newZone.width  (size.width+'px');
        newZone.height (size.height+'px');
        this.ids.templateZone.append(newZone);
        return newZone;
    }

    setPosition(position = this.position){
        if(position.left){
            this.position.left=position.left
        }
        if(position.top){
            this.position.top = position.top;
        }
        this.$zone.css({top:position.top,left:position.left});
    }

    setSize(size = this.size) {
        if(size.width){
            console.log(size.width)
            this.$zone.width(size.width);
            this.size.width=size.width
        }
        if(size.height){
            this.$zone.height(size.height);
            this.size.height = size.height;
        }
    }

    setColor(color = this.backgroundColor){
        this.$zone.css({'background-color':color, 'opacity' : 0.6});
    }
}

export {Zone}