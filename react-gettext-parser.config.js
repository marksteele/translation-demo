module.exports = {
  componentPropsMap: {
    T: {
      message: 'msgid',
      messagePlural: 'msgid_plural',
      context: 'msgctxt',
      comment: 'comment',
    }
  },
  funcArgumentsMap: {
    t: ['msgid', 'msgid_plural', 'msgctxt']
  },
  trim: true,
}
