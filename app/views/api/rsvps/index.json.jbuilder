@hsh.keys.each do |k|
  json.set! k.id do
    json.set! 'rsvp' do json.extract! k, :quantity, :id end
    json.set! 'event' do json.partial! "api/events/event", event: @hsh[k] end
  end
end
