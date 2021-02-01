FROM adoptopenjdk/openjdk11:ubi

ARG ROOT_DIR=backend

EXPOSE 8080

ARG DEPENDENCY=${ROOT_DIR}/target/dependency

COPY ${DEPENDENCY}/BOOT-INF/lib /app/lib

COPY ${DEPENDENCY}/META-INF /app/META-INF

COPY ${DEPENDENCY}/BOOT-INF/classes /app

ENTRYPOINT ["java","-cp","app:app/lib/*","hahava.com.github.HahavaApplicationKt"]