function Cube(dimensions, material, coordinates, userData) {

	var geometry = new THREE.BoxGeometry(dimensions[0], dimensions[1], dimensions[2]);
	THREE.Mesh.call(this, geometry, material);
	this.position.set.apply(this.position, coordinates);
	this.userData = userData || {};

}

Cube.prototype = Object.create(THREE.Mesh.prototype);
Cube.prototype.constructor = Cube;

Cube.prototype.addTo = function(scene) {
	scene.add(this);
	return this;
}