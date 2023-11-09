FROM php:8.2-fpm

COPY --from=composer:2.6.5 /usr/bin/composer /usr/bin/composer

COPY ./docker/php/php-fpm.d/www.conf /usr/local/etc/php-fpm.d/zz-www.conf