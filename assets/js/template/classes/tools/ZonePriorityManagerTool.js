import {TemplateTool} from './parent/TemplateTool'
import {ZonePriorityForegroundTool} from "./subtools/zonePriorityManager/ZonePriorityForegroundTool";
import {ZonePriorityBackgroundTool} from "./subtools/zonePriorityManager/ZonePriorityBackgroundTool";
import {ZonePriorityAboveTool} from "./subtools/zonePriorityManager/ZonePriorityAboveTool";
import {ZonePriorityBellowTool} from "./subtools/zonePriorityManager/ZonePriorityBellowTool";
/*import {ZonePriorityForegroundTool} from './subTools/ZonePriorityForegroundTool'
import {ZonePriorityBackgroundTool} from "./subTools/ZonePriorityBackgroundTool";
import {ZonePriorityAboveTool} from "./subTools/ZonePriorityAboveTool";
import {ZonePriorityBellowTool} from "./subTools/ZonePriorityBellowTool";*/

class ZonePriorityManagerTool extends TemplateTool{
    constructor(templateInterface){
        super(templateInterface);
        this.description = 'Arranger une zone';
        this.$eventLocation=$('body');
        this.addSubTools(
            new ZonePriorityForegroundTool(this.interface,this),
            new ZonePriorityBackgroundTool(this.interface,this),
            new ZonePriorityAboveTool(this.interface,this),
            new ZonePriorityBellowTool(this.interface,this)
        )
       // this.addSubTools(template);
    }



    activeTool(boolean){
        super.activeToolDecorator(boolean,()=>{

        })
    }
}

export {ZonePriorityManagerTool}