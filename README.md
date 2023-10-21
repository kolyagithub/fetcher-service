# Fetcher service
Service integrated with https://trending.bid and get user balance by request

# Requirements
```
Docker >= 20
node >= 18
npm >= 9
```

# Run (only by Docker container)
```angular2html
docker-compose up
```

# Test

## /auth
```angular2html
curl --location 'localhost:3000/auth' \
--header 'Content-Type: application/json' \
--data '{
"token": "5kqk0ac7g2lqk580nfia5sjfpg"
}'
```

## /balancer
```angular2html
curl --location 'localhost:3000/balance'
```