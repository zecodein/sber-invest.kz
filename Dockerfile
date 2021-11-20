FROM golang:1.16.3

LABEL base.name="sberinvest"

WORKDIR /app

COPY . .

RUN go build -o main ./cmd/

EXPOSE 8080

ENTRYPOINT ["./main"]