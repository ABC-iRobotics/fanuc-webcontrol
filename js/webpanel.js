$(document).ready(function () {

  $('#joint').show()
  $('#tcp').hide()
  $('#poses').hide()

  $('#menu-joint').click(function () {
    $('#joint').show()
    $('#tcp').hide()
    $('#poses').hide()
  })  

  $('#menu-tcp').click(function () {
    $('#joint').hide()
    $('#tcp').show()
    $('#poses').hide()
  })  

  $('#menu-poses').click(function () {
    $('#joint').hide()
    $('#tcp').hide()
    $('#poses').show()
  })    

  getposj()

  function getposj () {

    console.log('I am in the getposj function :-)')  

    $.getJSON("/KAREL/webmonitor", function (data) {
      $('.joint1').html(data.joint[0])
      $('.joint2').html(data.joint[1])
      $('.joint3').html(data.joint[2])
      $('.joint4').html(data.joint[3])
      $('.joint5').html(data.joint[4])
      $('.joint6').html(data.joint[5])
      $('.wlx').html(data.pose[0])
      $('.wly').html(data.pose[1])
      $('.wlz').html(data.pose[2])
      $('.trx').html(data.pose[3])
      $('.try').html(data.pose[4])
      $('.trz').html(data.pose[5])      
      setTimeout(getposj(), 300)
      })

  }

  $('#abort').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webabort',
      cache: false,
      success: function () {}
    })
    return false
  })  

  $('#j1m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j1m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j1p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j1p',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j2m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j2m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j2p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j2p',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j3m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j3m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j3p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j3p',
      cache: false,
      success: function () {}
    })
    return false
  })  

  $('#j4m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j4m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j4p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j4p',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j5m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j5m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j5p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j5p',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j6m').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j6m',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#j6p').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=j6p',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlpx').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlpx',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlpy').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlpy',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlpz').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlpz',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlmx').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlmx',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlmy').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlmy',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#wlmz').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=wlmz',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trpx').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trpx',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trpy').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trpy',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trpz').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trpz',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trmx').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trmx',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trmy').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trmy',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#trmz').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=trmz',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#pickup').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=pickup',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#zero').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=zero',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#place').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=place',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#coord').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=coord',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#show').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=show',
      cache: false,
      success: function () {}
    })
    return false
  })

  $('#touch').click(function () {
    $.ajax({
      type: 'GET',
      url: '/KAREL/webcontrol?getstart=touch',
      cache: false,
      success: function () {}
    })
    return false
  })

})