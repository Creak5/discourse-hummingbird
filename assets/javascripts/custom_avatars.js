Discourse.Utilities.avatarUrl = function(template, size) {
  if (!template) { return ""; }
  if (size <= 25) {
    return template.replace(/\{size\}/g, 'small');
  }
  else {
    return template.replace(/\{size\}/g, 'thumb');
  }
};

