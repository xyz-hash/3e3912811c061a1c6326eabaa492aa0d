StarWars = (function() {
  function StarWars(args) {
    this.el = $(args.el);
    this.audio = this.el.find('audio').get(0);
    this.start = this.el.find('.start');
    this.reset();
    this.start.bind('click', $.proxy(function() {
      this.audio.play();
    }, this));
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }
  StarWars.prototype.reset = function() {
    this.start.show();
  };
  return StarWars;
})();
new StarWars({
  el : '.starwars'
});
