## project

todo list board 작성

## 실행방법

### local

```bash
$ mvn clean install

$ mvn --projects backend spring-boot:run 
```

### docker

```bash
# layer 분리
$ mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

$ docker build -t hahava/my-todo-board

$ docker run -p 8080:8080 my-todo-board
```




