json.array! @benches do |bench|
  json.extract! bench, :lat, :lng
end
