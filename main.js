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

ModPE.setItem(898,"egg",0,"Wall Spawner Test",1);

Player.addItemCreativeInv(898, 1, 0);

function useItem(x,y,z,i,b,s) {
    if(i==898) {
        var ent=Level.spawnMob(x+0.5,y+1,z+0.5,15,"shelter/shelter.png");
        Entity.setHealth(ent,500);
        Entity.setRenderType(ent,wallRenderer.renderType);
        wall.push([ent,Entity.getX(ent),Entity.getY(ent),Entity.getZ(ent)]);
    }
}

function modTick() {
    if(wall.length!=0) {
        for(var i=0;i<wall.length;i++) {
            Entity.setPosition(wall[i][0],wall[i][1],wall[i][2],wall[i][3]);
            Entity.setRot(wall[i][0],0,0)
            if(Player.getPointedEntity()==wall[i][0]) {
                ModPE.showTipMessage("Wall Health : "+Entity.getHealth(wall[i][0]));
            }
        }
    }
}

function attackHook(a,v) {
    if(wall.length!=0) {
        for(var t=0;t<wall.length;t++) {
            if(a==getPlayerEnt()&&v==wall[t][0]) {
                preventDefault();
            }
        }
    }
}

function entityAddedHook(e) {
    if(Entity.getMobSkin(e)!="shelter/shelter.png"||Entity.getMobSkin(e)!="mob/zombie.png") {
        Entity.remove(e)
    }
}

function deathHook(a,v) {
    if(wall.length!=0) {
        for(var k=0;k<wall.length;k++) {
            if(v==wall[k][0]) {
                wall.splice(k,1)
            }
        }
    }
}
