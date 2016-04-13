/*
This work is licensed under the Creative Commons Attribution- NonCommercial 4.0 International License. To view a copy
of this license, visit http://creativecommons.org/licenses/by-nc/4.0/ or send a letter to Creative Commons, 444 Castro
Street, Suite 900, Mountain View, California, 94041, USA.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*
Copyright Red Eagle Reborn MCPE Teams
Red Eagle Reborn Project : Zombie Shelter Survival
fb.com/groups/
*/

//Making Wall Health Renderer
function addWallHealthToRenderer(renderer) {
    var model = renderer.getModel();
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rArm = model.getPart("rightArm");
    var lArm = model.getPart("leftArm");
    var rLeg = model.getPart("rightLeg");
    var lLeg = model.getPart("leftLeg");
    head.clear();
    body.clear();
    body.setTextureOffset(0, 0);
    body.addBox(-8, 8, -8, 16, 16, 16);
    rArm.clear();
    lArm.clear();
    rLeg.clear();
    lLeg.clear();
}
var wallRenderer = Renderer.createHumanoidRenderer();
addWallHealthToRenderer(wallRenderer);

//Variable[s]
var wall=[];
//Shelter Level:Health Shelter
var shelterLevel=[[1,500],[2,750],[3,1050],[4,1500]];
//1 easy,2 normal,3 hard,4 expert,5 master
var currentLevel=1;
var currentDifficulty=1;
var Difficulty=[[1,3],[2,7],[3,10],[4,12],[5,30]];

Block.defineBlock(236, "Easter Egg", ["piston_inner", 0], 2, false, 0);
//Block.setShape(236, 0, 0, 0, 0, 0, 0);
Block.setLightLevel(236, 0);
Block.setRenderLayer(236, 1);
Block.setLightOpacity(236, 1E-4);

ModPE.setItem(898,"egg",0,"Wall Spawner Test",1);

Player.addItemCreativeInv(898, 1, 0);

print("If you in Creative Mode, it will switch to survival");

var Shelter = {
    LoadData: function() {
        var checkSave=ModPE.loadData(Level.getWorldDir()+"shelter");
        if(checkSave!=""||checkSave!=null||checkSave!=undefined) {
            print("Save found, loading...")
            currentLevel=checkSave;
        }
    }
}

function selectLevelHook() {
    Shelter.LoadData();
}

function useItem(x,y,z,i,b,s) {
    if(i==898) {
        var ent=Level.spawnMob(x+0.5,y+1,z+0.5,15,"shelter/shelter.png");
        Entity.setMaxHealth(ent,500);
        Entity.setHealth(ent,500);
        Entity.setRenderType(ent,wallRenderer.renderType);
        wall.push([ent,Entity.getX(ent),Entity.getY(ent),Entity.getZ(ent)]);
    }
}

function modTick() {
    if(wall.length!=0) {
        for(var i=0;i<wall.length;i++) {
            Entity.setPosition(wall[i][0],wall[i][1],wall[i][2],wall[i][3]);
            Entity.setRot(wall[i][0],90,0);
            if(Player.getPointedEntity()==wall[i][0]) {
                ModPE.showTipMessage("Wall Health : "+Entity.getHealth(wall[i][0]));
            }
        }
    }
}

function attackHook(a,v) {
    if(wall.length!=0) {
        for(var t=0;t<wall.length;t++) {
            if(v==wall[t][0]) {
                if(a==getPlayerEnt()) {
                    preventDefault();
                } else if(a!=getPlayerEnt()) {
                    preventDefault();
                    Entity.setHealth(wall[t][0],currentLevel*3);
                }
            }
        }
    }
}

function entityAddedHook(e) {

}

function deathHook(a,v) {
    if(wall.length!=0) {
        for(var k=0;k<wall.length;k++) {
            if(v==wall[k][0]) {
                wall.splice(k,1);
                ModPE.showTipMessage(ChatColor.DARK_RED+"Your Wall has been destroyed !")
            }
        }
    }
}
