cmake_minimum_required(VERSION 3.16)
project(bookhub LANGUAGES CXX)

# Стандарты C++
set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Threads REQUIRED)

# Crow - header-only, добавляется через include
# Скачиваем его через FetchContent
include(FetchContent)

message(STATUS "Fetching Crow...")

FetchContent_Declare(
	Crow
	GIT_REPOSITORY 	https://github.com/CrowCpp/Crow.git
	GIT_TAG 	master
)

FetchContent_MakeAvailable(Crow)

add_executable(bookhub 
	src/main.cpp
)

# Где компилятору искать заколовочные файлы
target_include_directories(bookhub PRIVATE include)

target_link_libraries(bookhub PRIVATE
	Crow::Crow
	Threads::Threads
)

# Опции компиляции
if(MSVC)
	target_compile_options(bookhub PRIVATE /W4)
else()
	target_compile_options(bookhub PRIVATE -Wall -Wextra -o2)
endif()

# Куда класть исполняемый файл
set_target_properties(bookhub PROPERTIES
	RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin
)

