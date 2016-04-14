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
    rArm.clear();
    lArm.clear();
    rLeg.clear();
    lLeg.clear();
}
var wallRenderer = Renderer.createHumanoidRenderer();
addWallHealthToRenderer(wallRenderer);

var minecrafttf = "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GeYaBBoiGkAaVhpkGnoakBqmGtAa8gAAAAUAAAAAA4ADgAADAAcACwASABYAACU1IxUlNSEVNzUjFSU1IyIHBhUBESERAcCPAR3+44+PAR2OPCkq/s8DgH+OjqaPj6aPj6eNKSo6/Y4DgPyAAAIAAAAAAIADgAADAAcAADE1MxUDETMRgICAgIABAAKA/YAAAAIAAAIAAYADgAADAAcAABkBMxEzETMRgICAAgABgP6AAYD+gAAAAAACAAAAAAKAA4AAAwAfAAABNSMVAxEjNTM1IzUzETMRMxEzETMVIxUzFSMRIxEjEQGAgICAgICAgICAgICAgICAAYCAgP6AAQCAgIABAP8AAQD/AICAgP8AAQD/AAAAAAAFAAAAAAKAA4AABwALAA8AEwAbAAAhNSE1IRUjFRM1MxUlNSEVJTUzFT0BMzUzFSEVAQD/AAIAgICA/gABgP4AgICAAQCAgICAAQCAgICAgICAgICAgICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAxNTMVIREzESURMxkBNTMVNREzESURMxElNTMVgAGAgP4AgICA/gCAAYCAgIABAP8AgAEA/wABAICAgAEA/wCAAQD/AICAgAAAAAAIAAAAAAKAA4AAAwAHAAsADwAbAB8AIwAnAAAzNSEVMzUzFSURMxEBNTMVATUjNSM1MzUzETMRATUzFTM1MxUlNTMVgAEAgID9gIABgID/AICAgICA/oCAgID/AICAgICAgAEA/wABAICA/wCAgICA/wD/AAIAgICAgICAgAAAAAEAAAIAAIADgAADAAAZATMRgAIAAYD+gAAAAAAFAAAAAAIAA4AAAwAHAAsADwATAAAhNSEVJTUzFSURMxkBNTMVPQEhFQEAAQD+gID/AICAAQCAgICAgIABgP6AAYCAgICAgAAFAAAAAAIAA4AAAwAHAAsADwATAAAxNSEVPQEzFTURMxEBNTMVJTUhFQEAgID/AID+gAEAgICAgICAAYD+gAGAgICAgIAAAAAFAAABAAIAAoAAAwAHAAsADwATAAARNTMVITUzFSU1IRUlNTMVITUzFYABAID+gAEA/oCAAQCAAQCAgICAgICAgICAgIAAAAABAAAAgAKAAwAACwAAJREhNSERMxEhFSERAQD/AAEAgAEA/wCAAQCAAQD/AID/AAABAAD/gACAAQAAAwAAFREzEYCAAYD+gAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAACAAQAAAwAAMREzEYABAP8AAAAFAAAAAAKAA4AAAwAHAAsADwATAAAxNTMVNREzGQE1MxU1ETMZATUzFYCAgICAgICAAQD/AAEAgICAAQD/AAEAgIAAAAUAAAAAAoADgAADAAcADwAXABsAADM1IRUBNTMVAREzETMVIxUhESM1MzUzEQE1IRWAAYD/AID+gICAgAGAgICA/gABgICAAYCAgP8AAoD+gICAAYCAgP2AAoCAgAAAAAEAAAAAAoADgAALAAAxNSERIzUzNTMRIRUBAICAgAEAgAIAgID9AIAAAAAABgAAAAACgAOAAAcACwAPABMAFwAbAAAxETMVITUzEQE1MxU9ASEVATUzFQURMxEBNSEVgAGAgP4AgAEA/gCAAYCA/gABgAEAgID/AAEAgICAgIABAICAgAEA/wABAICAAAAAAAcAAAAAAoADgAADAAcACwAPABMAFwAbAAAzNSEVJTUzFSERMxEBNSEVATUzFQURMxEBNSEVgAGA/gCAAYCA/oABAP4AgAGAgP4AAYCAgICAgAEA/wABAICAAQCAgIABAP8AAQCAgAAAAwAAAAACgAOAAAMABwATAAATNTMVPQEzFRMRIREzFSERIzUhEYCAgID+AIABgIABAAIAgICAgID9gAEAAQCAAYCA/IAAAAAABAAAAAACgAOAAAMABwALABMAADM1IRUlNTMVIREzEQERIRUhFSEVgAGA/gCAAYCA/YACgP4AAYCAgICAgAGA/oABgAGAgICAAAAAAAUAAAAAAoADgAADAAcADwATABcAADM1IRU1ETMRIREzFSEVIRkBNTMVPQEhFYABgID9gIABgP6AgAEAgICAAQD/AAIAgID/AAIAgICAgIAAAwAAAAACgAOAAAMABwAPAAAhETMZATUzFTURIRUjESERAQCAgP6AgAKAAYD+gAGAgICAAQCAAQD+gAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlETMRIREzEQE1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAEA/wABAP8AAQCAgIABAP8AAQD/AAEAgIAAAAAABQAAAAACgAOAAAMABwALABMAFwAAMzUhFT0BMxUBETMRATUhNSERMxEBNSEVgAEAgP4AgAGA/oABgID+AAGAgICAgIABgAEA/wD/AICAAQD+AAIAgIAAAAIAAAAAAIACgAADAAcAADERMxEDETMRgICAAQD/AAGAAQD/AAAAAAACAAD/gACAAoAAAwAHAAAVETMRAxEzEYCAgIABgP6AAgABAP8AAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAACE1MxUlNTMVJTUzFSU1MxU9ATMVPQEzFT0BMxUBgID/AID/AID/AICAgICAgICAgICAgICAgICAgICAgICAgAAAAAACAAAAgAKAAgAAAwAHAAA9ASEVATUhFQKA/YACgICAgAEAgIAAAAAABwAAAAACAAOAAAMABwALAA8AEwAXABsAADE1MxU9ATMVPQEzFT0BMxUlNTMVJTUzFSU1MxWAgICA/wCA/wCA/wCAgICAgICAgICAgICAgICAgICAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAITUzFQM1MxU9ATMVATUzFQURMxEBNSEVAQCAgICA/gCAAYCA/gABgICAAQCAgICAgAEAgICAAQD/AAEAgIAAAAAEAAAAAAMAA4AAAwAHAA8AEwAAMzUhFSURMxE3ESERMxEzEQE1IRWAAgD9gICAAQCAgP2AAgCAgIACgP2AgAGA/wABgP4AAgCAgAAAAgAAAAACgAOAAAsADwAAMREzFSE1MxEjESEZATUhFYABgICA/oABgAMAgID9AAIA/gADAICAAAADAAAAAAKAA4AAAwAHABMAACURMxEDNTMVAREhFSEVIRUhESEVAgCAgID9gAIA/oABgP6AAYCAAYD+gAIAgID9gAOAgICA/oCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFT0BMxUhETMRATUzFSU1IRWAAYCA/YCAAYCA/gABgICAgICAAoD9gAIAgICAgIAAAgAAAAACgAOAAAMACwAAJREzEQURIRUhESEVAgCA/YACAP6AAYCAAoD9gIADgID9gIAAAAEAAAAAAoADgAALAAAxESEVIRUhFSERIRUCgP4AAQD/AAIAA4CAgID+gIAAAQAAAAACgAOAAAkAADERIRUhFSEVIRECgP4AAQD/AAOAgICA/gAAAAQAAAAAAoADgAADAAkADQARAAAzNSEVNREjNSERIREzGQE1IRWAAYCAAQD9gIACAICAgAGAgP4AAoD9gAKAgIAAAAAAAQAAAAACgAOAAAsAADERMxEhETMRIxEhEYABgICA/oADgP8AAQD8gAIA/gAAAAAAAQAAAAABgAOAAAsAADE1MxEjNSEVIxEzFYCAAYCAgIACgICA/YCAAAMAAAAAAoADgAADAAcACwAAMzUhFSU1MxUhETMRgAGA/gCAAYCAgICAgIADAP0AAAUAAAAAAoADgAADAAcACwATABcAACERMxEBNTMVAzUzFQERMxEhFSERATUzFQIAgP8AgICA/gCAAQD/AAGAgAGA/oABgICAAQCAgP2AA4D/AID+AAMAgIAAAAAAAQAAAAACgAOAAAUAADERMxEhFYACAAOA/QCAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTM1MxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAoCAgPyAAAAAAAMAAAAAAoADgAADAAsAEwAAATUzFQERMxUzFSMRIREjNTMRMxEBAID+gICAgAGAgICAAgCAgP4AA4CAgP2AAYCAAYD8gAAAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/gABgICAgAKA/YACgP2AAoCAgAACAAAAAAKAA4AAAwANAAABNTMVAREhFSEVIRUhEQIAgP2AAgD+gAGA/oACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFTM1MxUlNTMVIREzESURMxEBNSEVgAEAgID/AID+AIABgID+AAGAgICAgICAgAKA/YCAAgD+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACERMxEDNTMVAREhFSEVIRUhEQIAgICA/YACAP6AAYD+gAIA/gACgICA/YADgICAgP4AAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSU1MxUhETMRATUhFSU1MxU9ASEVgAGA/gCAAYCA/gABgP4AgAIAgICAgIABgP6AAYCAgICAgICAgAAAAAABAAAAAAKAA4AABwAAIREhNSEVIREBAP8AAoD/AAMAgID9AAADAAAAAAKAA4AAAwAHAAsAADM1IRUlETMRIREzEYABgP4AgAGAgICAgAMA/QADAP0AAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEzETMRAREzESERMxEBAID/AICAgP4AgAGAgICAgAEA/wABAP8AAQACAP4AAgD+AAAAAAADAAAAAAKAA4AAAwALABMAAAE1MxUBETMRMxUjFSE1IzUzETMRAQCA/oCAgIABgICAgAEAgID/AAOA/YCAgICAAoD8gAAAAAAJAAAAAAKAA4AAAwAHAAsADwATABcAGwAfACMAADERMxEhETMRATUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAAYD+gAGA/oABgICAgICAgICAgICAgICAgICAAAUAAAAAAoADgAADAAcACwAPABMAACERMxEBNTMVMzUzFSU1MxUhNTMVAQCA/wCAgID+AIABgIACgP2AAoCAgICAgICAgIAAAAUAAAAAAoADgAAFAAkADQARABcAADERMxUhFQE1MxU9ATMVPQEzFT0BITUhEYACAP4AgICA/gACgAEAgIABAICAgICAgICAgICA/wAAAAAAAQAAAAABgAOAAAcAADERIRUhESEVAYD/AAEAA4CA/YCAAAAABQAAAAACgAOAAAMABwALAA8AEwAAITUzFSURMxEBNTMVJREzEQE1MxUCAID/AID/AID/AID/AICAgIABAP8AAQCAgIABAP8AAQCAgAAAAAABAAAAAAGAA4AABwAAMTUhESE1IREBAP8AAYCAAoCA/IAAAAAFAAACAAKAA4AAAwAHAAsADwATAAARNTMVITUzFSU1MxUzNTMVJTUzFYABgID+AICAgP8AgAIAgICAgICAgICAgICAAAEAAP+AAoAAAAADAAAVNSEVAoCAgIAAAAEAAAMAAQADgAADAAARNSEVAQADAICAAAMAAAAAAoACgAADAA0AEQAAPQEzHQE1ITUhNSE1MxEBNSEVgAGA/oABgID+AAGAgICAgICAgID+AAIAgIAAAAADAAAAAAKAA4AAAwAHABEAACURMxEBNSEVAREzETMVIxEhFQIAgP6AAQD+AICAgAGAgAGA/oABgICA/gADgP6AgP8AgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAzNSEVPQEzFSERMxEBNTMVJTUhFYABgID9gIABgID+AAGAgICAgIABgP6AAQCAgICAgAADAAAAAAKAA4AAAwAHABEAADURMxkBNSEVATUhESM1MxEzEYABAP8AAYCAgICAAYD+gAGAgID+AIABAIABgPyAAAAAAAMAAAAAAoACgAADAA0AEQAAMzUhFSURMxUhNTMRIRURNSEVgAIA/YCAAYCA/gABgICAgAGAgID/AIABgICAAAACAAAAAAIAA4AACwAPAAAzESM1MzUzFSEVIRkBNSEVgICAgAEA/wABAAIAgICAgP4AAwCAgAAAAAMAAP+AAoACgAADAAcAEQAAFTUhFQERMxEBNSE1IREhNSERAgD+AIABgP6AAYD+gAIAgICAAYABAP8A/wCAgAEAgP2AAAAAAAMAAAAAAoADgAADAAcADwAAIREzEQE1IRUBETMRMxUjEQIAgP6AAQD+AICAgAIA/gACAICA/gADgP6AgP6AAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAAEAAD/gAKAAwAAAwAHAAsADwAAFzUhFSURMxEhETMRAzUzFYABgP4AgAGAgICAgICAgAEA/wACAP4AAoCAgAAABQAAAAACAAOAAAMABwALAA8AFwAAITUzFSU1MxUDNTMVPQEzFQERMxEzFSMRAYCA/wCAgICA/gCAgICAgICAgAEAgICAgID+AAOA/gCA/wAAAAAAAgAAAAABAAOAAAMABwAAMzUzFSURMxGAgP8AgICAgAMA/QAABAAAAAACgAKAAAMABwANABEAAAERMxETETMRIREhFSMRATUzFQEAgICA/YABAIABAIABAAEA/wD/AAIA/gACgID+AAIAgIAAAgAAAAACgAKAAAMACQAAIREzESERIRUhEQIAgP2AAgD+gAIA/gACgID+AAAEAAAAAAKAAoAAAwAHAAsADwAAMzUhFSURMxEhETMRATUhFYABgP4AgAGAgP4AAYCAgIABgP6AAYD+gAGAgIAAAwAA/4ACgAKAAAMADwATAAABETMRAREzFTMVIxUhFSEREzUhFQIAgP2AgICAAYD+gIABAAEAAQD/AP6AAwCAgICA/wACgICAAAAAAAMAAP+AAoACgAADAAcAEwAAGQEzGQE1IRUTESE1ITUjNTM1MxGAAQCA/oABgICAgAEAAQD/AAEAgID9gAEAgICAgP0AAAAAAAMAAAAAAoACgAADAAsADwAAATUzFQERMxUzFSMREzUhFQIAgP2AgICAgAEAAYCAgP6AAoCAgP6AAgCAgAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAxNSEVPQEzFSU1IRUlNTMVPQEhFQIAgP4AAYD+AIACAICAgICAgICAgICAgICAAAIAAAAAAYADgAADAA8AACE1MxUlESM1MxEzETMVIxEBAID/AICAgICAgICAAYCAAQD/AID+gAAAAgAAAAACgAKAAAMACQAANREzERU1IREzEYABgICAAgD+AICAAgD9gAAAAAAFAAAAAAKAAoAAAwAHAAsADwATAAAhNTMVJTUzFTM1MxUlETMRIREzEQEAgP8AgICA/gCAAYCAgICAgICAgIABgP6AAYD+gAACAAAAAAKAAoAAAwANAAA1ETMRFTUzETMRMxEzEYCAgICAgAIA/gCAgAEA/wACAP2AAAAACQAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjAAAxNTMVITUzFSU1MxUzNTMVJTUzFSU1MxUzNTMVJTUzFSE1MxWAAYCA/gCAgID/AID/AICAgP4AgAGAgICAgICAgICAgICAgICAgICAgICAgIAAAAMAAP+AAoACgAADAAcADwAAFzUhFQERMxEBNSE1IREzEYABgP4AgAGA/oABgICAgIABgAGA/oD/AICAAYD9gAADAAAAAAKAAoAABwALABMAADE1MzUzFSEVATUzFT0BITUhFSMVgIABgP6AgP6AAoCAgICAgAEAgICAgICAgAAABQAAAAACAAOAAAMABwALAA8AEwAAITUhFSURMxEBNTMVNREzGQE1IRUBAAEA/oCA/wCAgAEAgICAAQD/AAEAgICAAQD/AAEAgIAAAAEAAAAAAIADgAADAAAxETMRgAOA/IAAAAUAAAAAAgADgAADAAcACwAPABMAADE1IRU1ETMZATUzFSURMxEBNSEVAQCAgP8AgP6AAQCAgIABAP8AAQCAgIABAP8AAQCAgAAAAAAEAAACgAMAA4AAAwAHAAsADwAAETUzFSE1IRUlNSEVITUzFYABAAEA/gABAAEAgAKAgICAgICAgICAAAACAAAAAACAA4AAAwAHAAAxETMRAzUzFYCAgAKA/YADAICAAAADAAAAAAIAAwAAAwAHAAsAADM1IRUlETMZATUhFYABgP4AgAGAgICAAgD+AAIAgIAAAAAAAgAAAAACAAMAAA8AEwAAMTUzESM1MzUzFTMVIxEhFQE1MxWAgICAgIABAP8AgIABAICAgID/AIACgICAAAAAAAUAAAEAAYACgAADAAcACwAPABMAABE1MxUzNTMVJTUzFSU1MxUzNTMVgICA/wCA/wCAgIABAICAgICAgICAgICAgAAABQAAAAACgAOAABMAFwAbAB8AIwAAITUjNTM1IzUzNTMVMxUjFTMVIxUBNTMVMzUzFSU1MxUhNTMVAQCAgICAgICAgID/AICAgP4AgAGAgICAgICAgICAgIACgICAgICAgICAgAAAAAACAAAAAACAA4AAAwAHAAAxETMRAxEzEYCAgAGA/oACAAGA/oAAAAAABQAA/4ACgAMAAAcACwAPABMAGwAABTUjNSEVIxUTNTMVIREzEQE1MxUlNTM1MxUzFQEAgAGAgICA/YCAAYCA/gCAgICAgICAgAEAgIABgP6AAQCAgICAgICAAAADAAAAAAMAA4AABwALAA8AAAERIRUjFTMVFxEhEQcRIREBAAEAgICA/gCAAwABAAGAgICAgAKA/YCAA4D8gAAAAQAAAQABgAMAAAcAABkBITUhNSERAQD/AAGAAQABAICA/gAACgAAAAACgAKAAAMABwALAA8AEwAXABsAHwAjACcAACE1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUBAICAgP4AgICA/gCAgID/AICAgP8AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAAAAEAAACAAoABgAAFAAAlNSE1IRECAP4AAoCAgID/AAAAAQCAAQACAAGAAAMAABM1IRWAAYABAICAAAAAAAMAAAAAAwADgAAFAA0AEQAAAREhESMVBTUjNTMRIREHESERAQABAIABAICA/gCAAwABAAGA/wCAgICAAYD9gIADgPyAAAAAAAEAAAMAAoADgAADAAARNSEVAoADAICAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAACAAD/gAKAAwAAAwAPAAAVNSEVAREhNSERMxEhFSERAoD+gP8AAQCAAQD/AICAgAEAAQCAAQD/AID/AAACAAACAAEAA4AABQAJAAAZATMVMxUDNTMVgICAgAIAAQCAgAEAgIAAAQAAAgABAAOAAAcAABE1MzUjNSERgIABAAIAgICA/oAAAAAAAQGAAwACgAOAAAMAAAE1IRUBgAEAAwCAgAAAAAEAAP+AAoADAAAJAAAVETMRIREzESEVgAGAgP4AgAOA/YACgP0AgAADAAAAAAKAAwAAAwANABEAABE1MxUTESM1MzUjNSERMxEzEYCAgICAAQCAgAIAgID+AAGAgICA/QADAP0AAAAAAQAAAYAAgAIAAAMAABE1MxWAAYCAgAAAAgCA/4ACAACAAAMABwAAFzUhFT0BMxWAAQCAgICAgICAAAAAAQAAAoAAgAOAAAMAABkBMxGAAoABAP8AAAAAAAIAAAIAAYADgAADAAcAAAE1IxUHESERAQCAgAGAAoCAgIABgP6AAAAKAAAAAAKAAoAAAwAHAAsADwATABcAGwAfACMAJwAAMTUzFTM1MxUlNTMVMzUzFSU1MxUzNTMVJTUzFTM1MxUlNTMVMzUzFYCAgP8AgICA/wCAgID+AICAgP4AgICAgICAgICAgICAgICAgICAgICAgICAgICAAAAIAAAAAAKAA4AAAwAJAA0AEQAVABkAHQAhAAAxNTMVIREzFTMVJREzESU1MxUlNTMVNREzESURMxElNTMVgAEAgID+AIABAID+gICA/gCAAYCAgIABAICAgAEA/wCAgICAgICAAQD/AIABAP8AgICAAAAAAAcAAAAAAoADgAADAAcADQARABUAGQAdAAAxNTMVNREzEQU1IxEhEQE1MxU1ETMRJREzESU1MxWAgAEAgAEA/oCAgP4AgAGAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAAQD/AICAgAAABwAAAAACgAOAAAMABwANABEAFQAdACEAADE1MxU1ETMRBTUjESERATUzFTURMxEhNTM1IzUhEQE1MxWAgAEAgAEA/oCAgP4AgIABAAEAgICAgAEA/wCAgAEA/oABgICAgAEA/wCAgID+gAEAgIAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFT0BMxUhETMZATUzFT0BMxUDNTMVgAGAgP2AgICAgICAgICAgAEA/wABAICAgICAAQCAgAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVATUhFYABgICA/oABgP4AAQACAICA/gABAP8AAgCAgAEAgIAAAAAAAwAAAAACgAOAAAsADwATAAAxETMVITUzESMRIRkBNSEVAzUhFYABgICA/oABgIABAAIAgID+AAEA/wACAICAAQCAgAAFAAAAAAKAA4AACwAPABMAFwAbAAAxETMVITUzESMRIRkBNSEVJTUzFSE1MxUlNSEVgAGAgID+gAGA/gCAAYCA/gABgAIAgID+AAEA/wACAICAgICAgICAgIAAAAUAAAAAAwADgAALAA8AFwAbAB8AADERMxUhNTMRIxEhEQM1Mx0BNSE1IRUjFQE1IRUhNTMVgAGAgID+gICAAQABAID+gAEAAQCAAgCAgP4AAQD/AAKAgICAgICAgAEAgICAgAAEAAAAAAKAA4AACwAPABMAFwAAMREzFSE1MxEjESEZATUhFQE1MxUzNTMVgAGAgID+gAGA/oCAgIACAICA/gABAP8AAgCAgAEAgICAgAAAAAMAAAAAAoADgAALAA8AEwAAMREzFSE1MxEjESEZATUhFQE1MxWAAYCAgP6AAYD/AIACAICA/gABAP8AAgCAgAEAgIAAAQAAAAACgAOAABUAADERMxUzNSM1IRUhFTMVIxEhFSERIxGAgIACAP8AgIABAP6AgAMAgICAgICA/oCAAgD+AAAAAAAHAAD/gAKAA4AAAwAHAAsADwATABcAGwAABTUhFT0BMxUlNSEVPQEzFSERMxEBNTMVJTUhFQEAAQCA/gABgID9gIABgID+AAGAgICAgICAgICAgICAAgD+AAGAgICAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD9gAEAAoCAgICAgAMAgIAAAAAAAgAAAAACgAOAAAsADwAAMREhFSEVIRUhFSEVATUhFQKA/gABAP8AAgD/AAEAAoCAgICAgAMAgIAAAAAABQAAAAACgAOAAAkADQARABUAGQAAMREzFSEVIRUhFQE1IRUlNTMVITUzFSU1IRWAAQD/AAIA/gABgP4AgAGAgP4AAYACAICAgIACAICAgICAgICAgIAAAAMAAAAAAoADgAALAA8AEwAAMREhFSEVIRUhFSEVATUzFTM1MxUCgP4AAQD/AAIA/gCAgIACgICAgICAAwCAgICAAAAAAgAAAAACAAOAAAsADwAAMzUzESM1IRUjETMVATUhFYCAgAGAgID+AAEAgAGAgID+gIADAICAAAACAIAAAAKAA4AACwAPAAAzNTMRIzUhFSMRMxUDNSEVgICAAYCAgIABAIABgICA/oCAAwCAgAAAAAQAAAAAAoADgAALAA8AEwAXAAAzNTMRIzUhFSMRMxUBNTMVITUzFSU1IRWAgIABgICA/gCAAYCA/gABgIABgICA/oCAAoCAgICAgICAAAAAAwAAAAABgAOAAAsADwATAAAxNTMRIzUhFSMRMxUBNTMVMzUzFYCAAYCAgP6AgICAgAGAgID+gIADAICAgIAAAAIAAAAAAwADgAADABMAACURMxEFESM1MxEhFSERMxUjESEVAoCA/YCAgAIA/oCAgAGAgAKA/YCAAYCAAYCA/wCA/wCAAAAAAAUAAAAAAwADgAADAAsAFQAZAB0AAAE1MxUBETMRMxUjESE1IzUzESM1IREBNSEVITUzFQEAgP6AgICAAYCAgIABAP4AAQABAIABAICA/wADAP8AgP6AgIABgID9AAMAgICAgAAFAAAAAAKAA4AAAwAHAAsADwATAAAzNSEVJREzESERMxEBNSEVATUhFYABgP4AgAGAgP4AAYD+AAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUDNSEVgAGA/gCAAYCA/gABgIABAICAgAGA/oABgP6AAYCAgAEAgIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAADM1IRUlETMRIREzEQE1IRUlNTMVITUzFSU1IRWAAYD+AIABgID+AAGA/gCAAYCA/gABgICAgAGA/oABgP6AAYCAgICAgICAgICAAAcAAAAAAwADgAADAAcACwAPABcAGwAfAAAzNSEVJREzESERMxEBNTMdATUhNSEVIxUBNSEVITUzFYABgP4AgAGAgP2AgAEAAQCA/oABAAEAgICAgAGA/oABgP6AAgCAgICAgICAAQCAgICAAAYAAAAAAoADgAADAAcACwAPABMAFwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVgAGA/gCAAYCA/gABgP4AgAGAgICAgAIA/gACAP4AAgCAgICAgICAAAAJAAAAgAKAAwAAAwAHAAsADwATABcAGwAfACMAAD0BMxUhNTMVJTUzFTM1MxUlNTMVJTUzFTM1MxUlNTMVITUzFYABgID+AICAgP8AgP8AgICA/gCAAYCAgICAgICAgICAgICAgICAgICAgICAgIAAAwAAAAACgAOAAAMADQAXAAABETMRATUjETMRMxUhFTURIzUhNSEVMxEBAID/AICAgAEAgP8AAYCAAQABgP6A/wCAAoD+AICAgAIAgICA/YAAAAAABAAAAAACgAOAAAMABwALAA8AADM1IRUlETMRIREzEQE1IRWAAYD+AIABgID9gAEAgICAAgD+AAIA/gACgICAAAQAAAAAAoADgAADAAcACwAPAAAzNSEVJREzESERMxEBNSEVgAGA/gCAAYCA/wABAICAgAIA/gACAP4AAoCAgAAGAAAAAAKAA4AAAwAHAAsADwATABcAADM1IRUlETMRIREzEQE1MxUhNTMVJTUhFYABgP4AgAGAgP2AgAGAgP4AAYCAgIABgP6AAYD+gAIAgICAgICAgAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUzFTM1MxWAAYD+AIABgID+AICAgICAgAIA/gACAP4AAoCAgICAAAAAAAYAAAAAAoADgAADAAcACwAPABMAFwAAIREzEQE1MxUzNTMVJTUzFSE1MxUBNSEVAQCA/wCAgID+AIABgID9gAEAAYD+gAGAgICAgICAgICAAQCAgAAAAAADAAD/gAKAAwAAAwAHABMAACURMxEBNSEVAREzETMVIxEhFSEVAgCA/oABAP4AgICAAYD+gIABgP6AAYCAgP2AA4D/AID/AICAAAAABAAAAAACgAOAAAMADQARABUAAD0BMx0BNSE1ITUhNTMRATUhFQE1IRWAAYD+gAGAgP4AAYD+AAEAgICAgICAgID+AAIAgIABAICAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUDNSEVgAGA/oABgID+AAGAgAEAgICAgICAgID+AAIAgIABAICAAAAGAAAAAAKAA4AAAwANABEAFQAZAB0AAD0BMx0BNSE1ITUhNTMRATUhFSU1MxUhNTMVJTUhFYABgP6AAYCA/gABgP4AgAGAgP4AAYCAgICAgICAgP4AAgCAgICAgICAgICAAAAABgAAAAADAAOAAAMADQARABkAHQAhAAA9ATMdATUhNSE1ITUzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/oABgID9gIABAAEAgP6AAQABAICAgICAgICAgP4AAoCAgICAgICAAQCAgICAAAAABQAAAAACgAOAAAMADQARABUAGQAAPQEzHQE1ITUhNSE1MxEBNSEVATUzFTM1MxWAAYD+gAGAgP4AAYD+gICAgICAgICAgICA/gACAICAAQCAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAA9ATMdATUhNSE1ITUzEQE1IRUBNTMVgAGA/oABgID+AAGA/wCAgICAgICAgID+AAIAgIABAICAAAAEAAAAAAKAAoAAAwAVABkAHQAAPQEzHQE1MzUjNTM1MxUzNTMRIRUhFQE1MxUzNTMVgICAgICAgP8AAQD+AICAgICAgICAgICAgID/AICAAgCAgICAAAAABwAA/4ACgAMAAAMABwALAA8AEwAXABsAAAU1IRU9ATMVJTUhFT0BMxUhETMRATUzFSU1IRUBAAEAgP4AAYCA/YCAAYCA/gABgICAgICAgICAgICAgAGA/oABAICAgICAAAAAAAQAAAAAAoADgAADAA0AEQAVAAAzNSEVJREzFSE1MxEhFRE1IRUBNSEVgAIA/YCAAYCA/gABgP4AAQCAgIABgICA/wCAAYCAgAEAgIAAAAAABAAAAAACgAOAAAMADQARABUAADM1IRUlETMVITUzESEVETUhFQM1IRWAAgD9gIABgID+AAGAgAEAgICAAYCAgP8AgAGAgIABAICAAAYAAAAAAoADgAADAA0AEQAVABkAHQAAMzUhFSURMxUhNTMRIRURNSEVJTUzFSE1MxUlNSEVgAIA/YCAAYCA/gABgP4AgAGAgP4AAYCAgIABgICA/wCAAYCAgICAgICAgICAAAAFAAAAAAKAA4AAAwANABEAFQAZAAAzNSEVJREzFSE1MxEhFRE1IRUBNTMVMzUzFYACAP2AgAGAgP4AAYD+gICAgICAgAGAgID/AIABgICAAQCAgICAAAAAAgAAAAABAAOAAAMABwAAMxEzEQE1IRWAgP8AAQACgP2AAwCAgAAAAAIAAAAAAQADgAADAAcAADERMxEDNSEVgIABAAKA/YADAICAAAQAAAAAAoADgAADAAcACwAPAAAhETMRATUzFSE1MxUlNSEVAQCA/oCAAYCA/gABgAKA/YACgICAgICAgIAAAAADAIAAAAIAA4AAAwAHAAsAACERMxEBNTMVMzUzFQEAgP8AgICAAoD9gAMAgICAgAAEAAAAAAMAA4AAAwAPABMAFwAAIREzESERMxUhNSEVIxUhGQE1IRUhNTMVAgCA/YCAAQABAID+gAEAAQCAAgD+AAMAgICAgP4AAwCAgICAAAUAAAAAAoADgAADAAcACwAPABMAADM1IRUlETMRIREzEQE1IRUBNSEVgAGA/gCAAYCA/gABgP4AAQCAgIABgP6AAYD+gAGAgIABAICAAAAABQAAAAACgAOAAAMABwALAA8AEwAAMzUhFSURMxEhETMRATUhFQM1IRWAAYD+AIABgID+AAGAgAEAgICAAYD+gAGA/oABgICAAQCAgAAAAAAHAAAAAAKAA4AAAwAHAAsADwATABcAGwAAMzUhFSURMxEhETMRATUhFSU1MxUhNTMVJTUhFYABgP4AgAGAgP4AAYD+AIABgID+AAGAgICAAYD+gAGA/oABgICAgICAgICAgIAABwAAAAADAAOAAAMABwALAA8AFwAbAB8AADM1IRUlETMRIREzEQE1Mx0BNSE1IRUjFQE1IRUhNTMVgAGA/gCAAYCA/YCAAQABAID+gAEAAQCAgICAAYD+gAGA/oACAICAgICAgIABAICAgIAABgAAAAACgAOAAAMABwALAA8AEwAXAAAzNSEVJREzESERMxEBNSEVATUzFTM1MxWAAYD+AIABgID+AAGA/oCAgICAgIABgP6AAYD+gAGAgIABAICAgIAAAAMAAACAAoADAAADAAcACwAAJTUzFQE1IRUBNTMVAQCA/oACgP6AgICAgAEAgIABAICAAAADAAAAAAKAAoAAAwANABcAAAE1MxUBNSMRMxEzFSEVNREjNSE1IRUzEQEAgP8AgICAAQCA/wABgIABAICA/wCAAYD/AICAgAEAgICA/oAAAAMAAAAAAoADgAADAAkADQAANREzERU1IREzEQE1IRWAAYCA/YABAIACAP4AgIACAP2AAwCAgAAAAwAAAAACgAOAAAMACQANAAA1ETMRFTUhETMRATUhFYABgID/AAEAgAIA/gCAgAIA/YADAICAAAAFAAAAAAKAA4AAAwAJAA0AEQAVAAA1ETMRFTUhETMRATUzFSE1MxUlNSEVgAGAgP2AgAGAgP4AAYCAAYD+gICAAYD+AAKAgICAgICAgAAAAAQAAAAAAoADgAADAAkADQARAAA1ETMRFTUhETMRATUzFTM1MxWAAYCA/gCAgICAAgD+AICAAgD9gAMAgICAgAAEAAD/gAKAA4AAAwAHAA8AEwAAFzUhFQERMxEBNSE1IREzEQE1IRWAAYD+AIABgP6AAYCA/YABAICAgAGAAYD+gP8AgIABgP2AAwCAgAAAAAMAAP+AAoADgAADAAcAEwAAJREzEQE1IRUBETMRMxUjESEVIRUCAID+gAEA/gCAgIABgP6AgAGA/oABgICA/YAEAP6AgP8AgIAAAAAFAAD/gAKAA4AAAwAHAA8AEwAXAAAXNSEVAREzEQE1ITUhETMRATUzFTM1MxWAAYD+AIABgP6AAYCA/gCAgICAgIABgAGA/oD/AICAAYD9gAMAgICAgAAAAgAAAAACgAOAAAMAEwAANREzERU1MxEjNSEVIRUzFSMRIRWAgIACAP8AgIABAIACgP2AgIACgICAgID+gIAAAAUAAAAAAoACgAADAAcACwAPABsAADM1MxUzNSEVJREzGQE1MxUZATMVMzUjNSERIRWAgIABAP2AgICAgIABAP8AgICAgIABgP6AAYCAgP6AAYCAgID+gIAAAAAABwAAAAACgAOAAAMABwALAA8AEwAXABsAACERMxEBNTMVMzUzFSU1MxUhNTMVATUzFTM1MxUBAID/AICAgP4AgAGAgP4AgICAAYD+gAGAgICAgICAgICAAQCAgICAAAAAAQAAAYADAAIAAAMAABE1IRUDAAGAgIAAAgAAAgABAAOAAAMABwAAGQEzGQE1MxWAgAIAAQD/AAEAgIAAAgAAAgABAAOAAAMABwAAETUzFTURMxGAgAIAgICAAQD/AAAAAgAA/4ABAAEAAAMABwAAFTUzFTURMxGAgICAgIABAP8AAAAAAgAAAgABAAOAAAMABwAAEzUzFSURMxGAgP8AgAIAgICAAQD/AAAAAAQAAAIAAgADgAADAAcACwAPAAAZATMRMxEzEQE1MxUzNTMVgICA/wCAgIACAAEA/wABAP8AAQCAgICAAAQAAAIAAgADgAADAAcACwAPAAARNTMVMzUzFSURMxEzETMRgICA/wCAgIACAICAgICAAQD/AAEA/wAAAAQAAP+AAgABAAADAAcACwAPAAAVNTMVMzUzFSURMxEzETMRgICA/wCAgICAgICAgIABAP8AAQD/AAAAAAEAAAAAAYADAAALAAAzESM1MxEzETMVIxGAgICAgIABgIABAP8AgP6AAAAAAQAAAYABAAKAAAMAABkBIREBAAGAAQD/AAAAAAMAAAAAAoAAgAADAAcACwAAMTUzFTM1MxUzNTMVgICAgICAgICAgIAAAAAAAwAAAAABAAGAAAMABwALAAAzNTMVJTUzFT0BMxWAgP8AgICAgICAgICAgAADAAAAAAEAAYAAAwAHAAsAADE1MxU9ATMVJTUzFYCA/wCAgICAgICAgIAAAAMAAAAAAoADgAADABcAGwAAITUhFSU1IzUzNSM1MzUzFSEVIRUhFSEVETUhFQEAAYD+AICAgICAAQD/AAEA/wABgICAgICAgICAgICAgIACgICAAAIAAAIABIADgAAHABMAABMRIzUhFSMRIREhESMRIxUjNSMRgIABgIABAAKAgICAgAIAAQCAgP8AAYD+gAEAgID/AAAAAAAiAZ4AAQAAAAAAAAAZAAAAAQAAAAAAAQAJAIYAAQAAAAAAAgAHADcAAQAAAAAAAwAUABkAAQAAAAAABAARAC0AAQAAAAAABQALAD4AAQAAAAAABgAJAIYAAQAAAAAABwA8AEkAAQAAAAAACAAeAMIAAQAAAAAACQAKAAoAAQAAAAAACgAmAIUAAQAAAAAACwAXAKsAAQAAAAAADAA5AMIAAQAAAAAADQAoAPsAAQAAAAAADgAuASMAAQAAAAAAEwApAVEAAQAAAAABAAAIAXoAAwABBAkAAAJKAqwAAwABBAkAAQASArgAAwABBAkAAgAOAZYAAwABBAkAAwAiAYIAAwABBAkABAAiAYIAAwABBAkABQAWAaQAAwABBAkABgASArgAAwABBAkABwDGAboAAwABBAkACAAsAoAAAwABBAkACQAKAyQAAwABBAkACgJKAqwAAwABBAkACwA+BPYAAwABBAkADAAiBTQAAwABBAkADQBQBVYAAwABBAkADgBcBaYAAwABBAkAEwA2BgIAAwABBAkBAAAQBjhDb3B5cmlnaHQgYm9iZ3JhdHRvbiAyMDEwRm9udFN0cnVjdCBNaW5lY3JhZnRNaW5lY3JhZnQgUmVndWxhclZlcnNpb24gMS4wRm9udFN0cnVjdCBpcyBhIHRyYWRlbWFyayBvZiBGU0kgRm9udFNob3AgSW50ZXJuYXRpb25hbCBHbWJIHE1pbmVjcmFmdB0gd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApodHRwOi8vd3d3LmZvbnRzaG9wLmNvbWh0dHA6Ly9mb250c3RydWN0LmZvbnRzaG9wLmNvbS9mb250c3RydWN0aW9ucy9zaG93LzM5NDEzM0NyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24gU2hhcmUgQWxpa2VodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS1zYS8zLjAvRml2ZSBiaWcgcXVhY2tpbmcgemVwaHlycyBqb2x0IG15IHdheCBiZWRBUUFNZEZwbgBNAGkAbgBlAGMAcgBhAGYAdAAgAFIAZQBnAHUAbABhAHIAVgBlAHIAcwBpAG8AbgAgADEALgAwAFQAaABlACAAIgBEAGoARABDAEgAIgAgAG4AYQBtAGUAIABpAHMAIABvAHcAbgAgAGIAeQAgAG0AZQAgACgAZABqAGQAYwBoAC4AYwBvAG0AKQAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAEYAbwBuAHQAcwB0AHIAdQBjAHQAIABiAHkAIABGAG8AbgB0AFMAaABvAHAAVABoAGkAcwAgACIATQBpAG4AZQBjAHIAYQBmAHQAIgAgAGYAbwBuAHQAIAB3AGEAcwAgAGEAZABhAHAAdABlAGQAIABpAG4AdABvACAAVAByAHUAZQBUAHkAcABlACAAZgBpAGwAZQAgAGIAeQAgAG0AZQAgACgARABqAEQAQwBIACkALgANAAoADQAKAFQAaABpAHMAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABmAG8AbgB0ACAAaQBzACAAdQBuAGQAZQByACAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEwAaQBjAGUAbgBzAGUAIAAoAFMAaABhAHIAZQAgAEEAbABpAGsAZQApAC4ADQAKAA0ACgBUAGgAZQAgACIARABqAEQAQwBIACIAIABuAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABtAGUAIAAoAGQAagBkAGMAaAAuAGMAbwBtACkALgANAAoADQAKAFQAaABlACAAIgBNAGkAbgBlAGMAcgBhAGYAdAAiACAAZgBvAG4AdAAgAHMAdAB5AGwAZQAgAHcAYQBzACAAbQBhAGQAZQAgAGIAeQAgAE4AbwB0AGMAaAAuAA0ACgANAAoAVABoAGUAIAAiAE0AaQBuAGUAYwByAGEAZgB0ACIAIABnAGEAbQBlACAAaQBzACAAbwB3AG4AIABiAHkAIABNAG8AagBhAG4AZwAgAFMAcABlAGMAaQBmAGkAYwBhAHQAaQBvAG4AcwAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABzAHQAcgB1AGMAdAAuAGYAbwBuAHQAcwBoAG8AcAAuAGMAbwBtAC8AaAB0AHQAcAA6AC8ALwBkAGoAZABjAGgALgBjAG8AbQAvAEMAcgBlAGEAdABpAHYAZQAgAEMAbwBtAG0AbwBuAHMAIABBAHQAdAByAGkAYgB1AHQAaQBvAG4AIABTAGgAYQByAGUAIABBAGwAaQBrAGUAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwBNAGkAbgBlAGMAcgBhAGYAdAAgAGkAcwAgAGoAdQBzAHQAIABhAHcAZQBzAG8AbQBlACAAIQBBAFEAQQBNAGQARgBwAG4AAAADAAAAAAAAAGYAMwAAAAAAAAAAAAAAAAAAAAAAAAAA";
writeFileFromByteArray(android.util.Base64.decode(minecrafttf, 0), android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/minecraft.ttf");
var mcfont = new android.graphics.Typeface.createFromFile(android.os.Environment.getExternalStorageDirectory().getAbsolutePath() + "/games/com.mojang/minecraftpe/minecraft.ttf");

function writeFileFromByteArray(byteArray, path)
{
    var fontFile = new java.io.File(path);
    if(fontFile.exists())
        fontFile.delete();
    fontFile.createNewFile();
    var fontStream = new java.io.FileOutputStream(fontFile);
    fontStream.write(byteArray);
    fontStream.close();
}

//Variable[s]
var wall=[];
//Shelter Level:Health Shelter
var shelterLevel=[[1,500],[2,750],[3,1050],[4,1500]];
//1 easy,2 normal,3 hard,4 expert,5 master
var currentLevel=1;
var currentDifficulty=1;
var Difficulty=[[1,3],[2,7],[3,10],[4,12],[5,30]];
var GUI;
var currentMoney=0;
var currentHealth=500;

Block.defineBlock(236, "Easter Egg", ["furnace", 3], 1, false, 0);
Block.defineBlock(237, "Iron", ["hopper_outside", 0], 1, false, 0);
Block.defineBlock(238, "Wood", ["log", 0], 1, false, 0);
Block.defineBlock(201, "Iron", ["hopper_outside", 0], 1, false, 0);
Block.defineBlock(202, "Wood", ["log", 0], 1, false, 0);
Block.setShape(237, 1/6, 0, 1/6, 5/6, 1/4, 5/6);
Block.setShape(238, 1/6, 0, 1/6, 5/6, 1/4, 5/6);
Block.setShape(201, 1/6, 0, 1/6, 5/6, 1/4, 5/6);
Block.setShape(202, 1/6, 0, 1/6, 5/6, 1/4, 5/6);
Block.setDestroyTime(201,0.42);
Block.setDestroyTime(202,0.42);
Block.setDestroyTime(236,-1);
Block.setDestroyTime(237,-1);
Block.setDestroyTime(238,-1);
Block.setLightLevel(236, 0);
Block.setLightOpacity(236, 1E-4);
Block.setLightOpacity(201, 1E-4);
Block.setLightOpacity(202, 1E-4);


ModPE.setItem(898,"egg",0,"Wall Spawner Test",1);
ModPE.setItem(899,"tomahawk",0,"Tomahawk",1);

Item.setHandEquipped(899,true);
Item.setCategory(899,3);

Player.addItemCreativeInv(899, 1, 0);
Player.addItemCreativeInv(898, 1, 0);
Player.addItemCreativeInv(237, 1, 0);
Player.addItemCreativeInv(238, 1, 0);

var Shelter = {
    SaveData: function() {
        ModPE.removeData(Level.getWorldDir()+"shelter");
        ModPE.saveData(Level.getWorldDir()+"shelter",currentLevel);
        ModPE.removeData(Level.getWorldDir()+"money");
        ModPE.saveData(Level.getWorldDir()+"money",currentMoney);
        ModPE.removeData(Level.getWorldDir()+"cdif");
        ModPE.saveData(Level.getWorldDir()+"cdif",currentDifficulty);
    },
    LoadData: function() {
        if(ModPE.readData(Level.getWorldDir()+"shelter")>1) {
            print("Save found, loading...")
            currentLevel=ModPE.readData(Level.getWorldDir()+"shelter");
        }
        if(ModPE.readData(Level.getWorldDir()+"money")>0) {
            currentMoney=ModPE.readData(Level.getWorldDir()+"money");
        }
        if(ModPE.readData(Level.getWorldDir()+"cdif")>1) {
            currentDifficulty=ModPE.readData(Level.getWorldDir()+"cdif");
        }
    },
    LoadGUI: function() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({ run:function(){
            if(GUI!=null) {
                GUI.dismiss();
                GUI=null;
            }
            try {
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);

                var moneyText = new android.widget.TextView(ctx);
                moneyText.setText("$"+currentMoney);
                moneyText.setTextSize(20);
                moneyText.setTextColor(android.graphics.Color.GREEN);
                moneyText.setPaintFlags(moneyText.getPaintFlags() | android.graphics.Paint.SUBPIXEL_TEXT_FLAG);
                moneyText.setShadowLayer(0.001, Math.round(moneyText.getLineHeight() / 8), Math.round(moneyText.getLineHeight() / 8), android.graphics.Color.parseColor("#FF333333"));
                moneyText.setTypeface(mcfont);
                //moneyText.setTouchable(false);
                layout.addView(moneyText);
                GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
                GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER,10,20)
                GUI.setTouchable(false);
            } catch(e) {
                print(e);
            }
        }}));
    },
    CloseGUI: function() {
        var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
        ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
            if(GUI!=null){
                GUI.dismiss();
                GUI = null;
            }
        }}))
    },
    CheckWall: function() {
        if(wall.length!=0) {
            if(currentHealth<=0) {
                for(var p=0;p<wall.length;p++) {
                    Level.destroyBlock(wall[p][1],wall[p][2],wall[p][3],false);
                    Entity.setHealth(wall[p][0],-1);
                    wall.splice(p,1);
                    currentHealth=0;
                    ModPE.showTipMessage(ChatColor.DARK_RED+"Your Wall has been destroyed !");
                }
            }
        }
    }
}

function selectLevelHook() {
    Shelter.LoadData();
    Shelter.LoadGUI();
}

function useItem(x,y,z,i,b,s) {
    if(i==898) {
        Level.setTile(x,y+1,z,236);
        var ent=Level.spawnMob(x+0.5,y+1,z+0.5,15,"shelter/shelter.png");
        Entity.setRenderType(ent,wallRenderer.renderType);
        wall.push([ent,x,y+1,z]);
    }
}

function modTick() {
    if(wall.length!=0) {
        for(var i=0;i<wall.length;i++) {
            Entity.setRot(wall[i][0],0,0);
            Entity.setPosition(wall[i][0],wall[i][1]+0.5,wall[i][2],wall[i][3]+0.5);
            Entity.setFireTicks(wall[i][0],0);
            if(Player.getPointedBlockId()==236||Player.getPointedEntity()==wall[i][0]) {
                ModPE.showTipMessage("Wall Health : "+currentHealth);
            }
        }
    }
    Shelter.CheckWall();
}


function attackHook(a,v) {
    if(wall.length!=0) {
        for(var t=0;t<wall.length;t++) {
            if(v==wall[t][0]) {
                preventDefault();
            }
        }
    }
    if(a==getPlayerEnt()) {
        if(Player.getCarriedItem()==899) {
            Entity.setHealth(v,Entity.getHealth(v)-1);
        }
    }
}

function entityHurtHook(a,v) {
    if(wall.length!=0) {
        for(var k=0;k<wall.length;k++) {
            if(v==wall[k][0]) {
                preventDefault();
                if(Entity.getEntityTypeId(a)==32) {
                    currentHealth=currentHealth-(3*currentDifficulty);
                    Level.destroyBlock(wall[k][1],wall[k][2],wall[k][3],false);
                    Level.setTile(wall[k][1],wall[k][2],wall[k][3],236);
                }
            }
        }
    }
}

function deathHook(a,v) {
    if(Entity.getEntityTypeId(v)==32&&a==getPlayerEnt()) {
        preventDefault();
        var rnd=rndNumber(300,500);
        var chances=Math.round(currentDifficulty*1.2);
        var mny=rnd*chances;
        currentMoney+=parseInt(mny);
        Shelter.LoadGUI();
        ModPE.showTipMessage(ChatColor.GREEN+"+$"+mny)
        //clientMessage(currentMoney);
    }
}

function destroyBlock(x,y,z) {
    if(getTile()==201) {
        var drops=rndNumber(1,5);
        Level.dropItem(x+0.5,y+0.5,z+0.5,0,265,drops,0);
    }
    if(getTile()==202) {
        var drops=rndNumber(1,5);
        Level.dropItem(x+0.5,y+0.5,z+0.5,0,17,drops,0);
    }
}

function leaveGame() {
    Shelter.CloseGUI();
    Shelter.SaveData();
}

function rndNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

